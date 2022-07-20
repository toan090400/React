var express = require('express');
var router = express.Router();

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../ui/public/images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

const placeController = require('./../controllers/placeController');
const authController = require('./../controllers/authController');


router.use(authController.isLoggedIn);

router
    .route('/')
    .get(placeController.getAllPlaces)
    .post(upload.single('image'),placeController.createPlace);

router
    .route('/:id')
    .get(placeController.getPlace)
    .patch(placeController.updatePlace)
    .delete(placeController.deletePlace);

module.exports = router;