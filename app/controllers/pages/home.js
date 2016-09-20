'use strict';

exports.view = {
    description: 'Returns the home page',
    auth: {
        mode: 'try',
        strategy: 'jwt'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false // '/login' if set redirects to ./login.
        }
    },
    handler: function(request, reply) {

        reply.view('homepage');

    }
};
