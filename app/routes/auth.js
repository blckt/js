'use strict';

exports.register = function (plugin, options, next) {

    const auth = require('../controllers/auth').auth;
    plugin.route([{
        method: 'POST',
        path: '/login',
        config: auth.login.config
    },
        {
            method: 'POST',
            path: '/register',
            config: auth.register.config
        },
        {
            method: 'GET',
            path: '/ping',
            config: auth.ping.config
        }]);

    next();
};

exports.register.attributes = {
    name: 'auth_routes',
    version: require('../../package.json').version
};
