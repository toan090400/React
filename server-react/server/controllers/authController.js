const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

// const crypto = require('crypto');
const { promisify } = require('util');

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        // 1) Check if email and password exist
        if (!username || !password) {
            return next('Please provide username and password!');
        }
        
        // 2) Check if user exists && password is correct
        const user = await User.findOne({ username }).select('+password');

        if (!user) {
            return next('Incorrect username');
        }

        const correct = await bcrypt.compare(password,user.password);
        
        if (!correct) {
            return next('Incorrect password');
        }

        // // 3) If everything ok, send token to client
        
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRWS_IN
        });

        const cookieOptions = {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        };
        if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    
        res.cookie('jwt', token, cookieOptions);
    
        // // Remove password from output
        user.password = undefined;

        res.status(201).json({
            token,
            user,
        });



    } catch (error) {
        console.log(error);
        res.status(400).json(error);

    }
}

exports.protect = async (req, res, next) => {
    try {

        // 1) Getting token and check of it's there
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }else if (req.cookies.jwt){
            token = req.cookies.jwt;
        }
        if (!token) {
            return next('You are not logged in! Please log in to get access.');
        }

        // 2) Verification token
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        if (!decoded) {
            return next('The user belonging to this token does no longer exist.');
        }

        // 3) Check if user still exists
        const currentUser = await User.findById(decoded.id);
        // console.log(currentUser);
        if (!currentUser) {
            return next('The user belonging to this token does no longer exist.');
        }


        // GRANT ACCESS TO PROTECTED ROUTE
        req.user = currentUser;
        next();

    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error,
        });
    }

}

exports.restrictTo = (...isAdmin) => {
    return (req, res, next) => {
        // roles ['admin', 'lead-guide']. role='user'
        console.log(isAdmin);
        console.log(req.user.isAdmin);
        if (!(req.user.isAdmin)) {
            return next('You do not have permission to perform this action');
        }

        next();
    };
};

exports.isLoggedIn = async (req, res, next) => {

    if (req.cookies.jwt){

        try {
            const decoded = await promisify(jwt.verify)(
                req.cookies.jwt, 
                process.env.JWT_SECRET
            );
            // 3) Check if user still exists
            const currentUser = await User.findById(decoded.id);
            if (!currentUser) {
                return next();
            }
            
            // GRANT ACCESS TO PROTECTED ROUTE
            res.locals.user = currentUser;
            
            
            return next();

        } catch (error) {
            console.log(error);
            res.status(400).json({
                status: 'error',
                message: error,
            });
        }

        
    }
    next();
    

}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json('success');
    } catch (err) {
        console.log(err);
    }

    
};