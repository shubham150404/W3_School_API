require('dotenv').config();
const mongoose = require('mongoose');
const Tutorial = require('../model/Tutorial')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.Tutorial_create = async function (req, res, next) {
    try {
        if (!req.body.title || !req.body.content || !req.body.category ) {
            throw new Error("Please Fill the data")
        }
        if (!req.body.createdAt) {
            req.body.createdAt = Date.now()
          }
          if (!req.body.updatedAt) {
            req.body.updatedAt = Date.now()
          }
        const Tutorial_data = await Tutorial.create(req.body)
        const Jwt_Tutorial = jwt.sign({ id: Tutorial_data._id }, process.env.SECRET_TUTORIAL)
        res.status(201).json({
            status: "sucess",
            message: "Tutorial create",
            data: Tutorial_data,
            Jwt_Tutorial
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message,
        })
    }
}

exports.Tutorial_get = async function (req, res, next) {
    try {
        const Tutorial_get = await Tutorial.find().populate('category')
        res.status(201).json({
            status: "sucess",
            message: "Tutorial Find",
            data: Tutorial_get,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message,
        })
    }
}

exports.Tutorial_Update = async function (req, res, next) {
    try {
        id = req.params.id
        if (req.body.updatedAt) {
            req.body.updatedAt = Date.now()
        } else if (!req.body.updatedAt) {
            req.body.updatedAt = Date.now()
        }
        const Tutorial_get = await Tutorial.findByIdAndUpdate(id, req.body)
        res.status(201).json({
            status: "sucess",
            message: "Tutorial Update",
            data: Tutorial_get,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message,
        })
    }
}

exports.Tutorial_Delete = async function (req, res, next) {
    try {
        id = req.params.id
        await Tutorial.findByIdAndDelete(id)
        res.status(201).json({
            status: "sucess",
            message: "Tutorial Delete",
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message,
        })
    }
}

exports.Tutorial_sequre = async function (req, res, next) {
    try {
        let Tutorial_Token = req.headers.authorization
        if (!Tutorial_Token) {
            throw new Error("Token not found")
        }
        const Jwt_token = jwt.verify(Tutorial_Token, process.env.SECRET_TUTORIAL);
        next()
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: "Tutorial is not sequre",
        })
    }
}