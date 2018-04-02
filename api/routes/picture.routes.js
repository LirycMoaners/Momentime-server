module.exports = function(app) {
    var picture = require('../controllers/picture.controller');

    // category Routes
    app.route('/pictures')
        .get(picture.list_pictures_all_categories);


    app.route('/pictures/:category')
        .get(picture.list_pictures_a_category);
};