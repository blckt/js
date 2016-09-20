'use strict';

exports.register = function (server, options, next) {
    const auth = require('../app/controllers/auth').auth;
    server.auth.strategy('jwt', 'jwt', true, {
        key: 'asdas das d13 4e2!',
        validateFunc: auth.tokenValidation,
        verifyOptions: { algorithms: ['HS256'] }
    });


    return next();
};

exports.register.attributes = {
    name: 'auth',
    dependencies: ['context', 'hapi-auth-cookie', 'mongoose']
};
