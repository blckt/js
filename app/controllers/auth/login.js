'use strict';

const Mongoose = require('mongoose');
const Joi = require('joi');
const User = Mongoose.model('User');

exports.showForm = {
    description: 'Returns the login page',
    auth: {
        mode: 'try',
        strategy: 'jwt'
    },
 
    handler: function (request, reply) {

        if (request.auth.isAuthenticated) {
            return reply.redirect('/account');
        }
        console.log('after view')
        reply.view('auth/login');

    }
};

exports.postForm = {
    description: 'Post to the login page',
    validate: {
        payload: {
            username: Joi.string().min(3).max(20),
            password: Joi.string().min(6).max(20)
        }
    },
    auth:false,
    handler: function (request, reply) {
        console.log('SHIT HAPPEND');
        reply({ x: 1 })
        // if (request.auth.isAuthenticated) {
        //     return reply.redirect('/account');
        // }

        // User.findByCredentials(request.payload.username, request.payload.password, function (err, user, msg) {
        //     if (err) {
        //         // Boom bad implementation
        //         request.yar.flash('error', 'An internal server error occurred');
        //         return reply.redirect('/login');
        //     }

        //     if (user) {
        //         request.cookieAuth.set(user);
        //         return reply.redirect('/account');
        //     } else {
        //         // User not fond in database
        //         request.yar.flash('error', 'Invalid username or password');
        //         return reply.redirect('/login');
        //     }
        // });

    }
};
