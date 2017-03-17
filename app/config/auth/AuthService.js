var React = require('react');
var ReactRouter = require('react-router');

var AuthService = {
    getToken: function() {
        return localStorage.getItem('id_token');
    },

    loggedIn: function() {
        return !!this.getToken;
    },
    getProfile: function() {
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(localStorage.profile) : {}
    },
    isAdmin: function() {
        if(this.getProfile().app_metadata.roles[0] == "admin") {
            return true;
        }
        else {
            return false;
        }
    },
    logout: function() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        ReactRouter.browserHistory.push("/#/login");
        window.location.reload();
    },
    requireAdminAuth: function() {
        if(!this.isAdmin) {
            replace('/login');
            ReactRouter.browserHistory.push("/#/login");
            window.setTimeout(function() {
                window.location.reload();
            }, 1);
        }
    },
    requireAuth: function() {
        if(!localStorage.getItem('id_token')) {
            replace('/login');
            ReactRouter.browserHistory.push("/#/login");
            window.setTimeout(function() {
                window.location.reload();
            }, 1);
        }
    }
}

module.exports = AuthService;