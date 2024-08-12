require('dotenv').config();
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Category = require('../model/Category')
const Tutorial = require('../model/Tutorial')
var jwt = require('jsonwebtoken');
const Categorycontroller = require('../controller/CategoryController')
const Tutorialcontroller = require('../controller/TutorialController')
/* GET home page. */


router.post('/Category',Categorycontroller.Category_create );

router.get('/CategoryData',Categorycontroller.Category_sequre,Categorycontroller.Category_get);

router.put('/CategoryUpdate/:id',Categorycontroller.Category_sequre,Categorycontroller.Category_Update );

router.delete('/CategoryDelete/:id',Categorycontroller.Category_sequre,Categorycontroller.Category_Delete);


router.post('/Tutorial',Tutorialcontroller.Tutorial_create );

router.get('/TutorialData',Tutorialcontroller.Tutorial_sequre,Tutorialcontroller.Tutorial_get);

router.put('/TutorialUpdate/:id',Tutorialcontroller.Tutorial_sequre,Tutorialcontroller.Tutorial_Update);

router.delete('/TutorialDelete/:id',Tutorialcontroller.Tutorial_sequre,Tutorialcontroller.Tutorial_Delete);

module.exports = router;
