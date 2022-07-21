const Place = require('../models/placeModel');
const fs = require('fs')
exports.getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find();

        res.status(200).json(places)

    } catch (error) {
        res.status(400).json(error);
    }
};
exports.getPlace = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);

        res.status(200).json(place)

    } catch (error) {
        res.status(400).json(error);
    }
};
exports.createPlace = async (req, res) => {
    try {
        // (req.file.destination + req.file.filename)
        const newPlace = new Place({
            name: req.body.name,
            number: req.body.number,
            image: req.file.filename,
        });
        newPlace.save((err) => {
            if (err){
                return console.log(err);
            }
            res.status(200).json({
                newPlace,
                message: 'Thêm mới thành công',
            })
        });

    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
};
exports.updatePlace = async (req, res) => {
    try {
        const newPlace = await Place.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            newPlace,
            message:'Cập nhập thành công!'
        })

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
exports.deletePlace = async (req, res) => {
    try {
        const place = await Place.findByIdAndDelete(req.params.id);
        fs.unlink(`../ui/public/images/${place.image}`,err => {
            return console.log(err);
        })
        res.status(200).json({
            status: 'Xóa thành công',
        })

    } catch (error) {
        res.status(400).json(error);
    }
};