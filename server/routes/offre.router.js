
const express = require('express');
const router = express.Router();
const offreController = require('../controller/offre.controller');


//create, find, update, delete
router.get("/",offreController.view);
router.post("/",offreController.find);

router.post("/postule",offreController.postule);

router.get("/forms-entreprise",offreController.form);
router.post("/forms-entreprise",offreController.create);



router.post("/edit-offreadmin/:id",offreController.edit);
router.get("/Delete-offreadmin/:id",offreController.delete);


module.exports = router;



