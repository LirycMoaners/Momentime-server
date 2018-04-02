module.exports = function(app) {
    var category = require('../controllers/category.controller');

    // category Routes
    app.route('/categories')
        .get(category.list_all_categories);
};