const  {User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { request, response } = require('express');


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}




module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json({users: users}))
        .catch(err => response.json({ message: 'could not find users', error: err}));
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.status(404).json(err));
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedUser => response.json({updatedUser: updatedUser}))
        .catch(err => response.status(400).json(err))
}


module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json({deleteConfirmation:deleteConfirmation }))
        .catch(err => response.json({ message: 'could not delete user', error: err}))
}



module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            response
                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => response.json(err));
}

module.exports.login = async (request, response) => {
    const user = await User.findOne({ email: request.body.email });
    if (user === null) {
        return response.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(request.body.password, user.password);
    if (!correctPassword) {
        return response.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    response
        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}


module.exports.logout = (request, response) => {
    response.clearCookie('usertoken');
    response.sendStatus(200);
}


