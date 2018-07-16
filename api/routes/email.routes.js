module.exports = function(app) {
    var email = require('../controllers/email.controller');

    // category Routes
    app.route('/emails')
        .post(email.send_email);
};