var fs = require('fs');

const folders = fs.readdirSync('./pictures/');

exports.list_pictures_all_categories = function(req, res) {
    var pictures = [];
    for(const folder of folders) {
        pictures.push(...createPictures(folder));
    }
    res.json(pictures);
};

exports.list_pictures_a_category = function(req, res) {
    
    var category = folders.find((folder) => folder == req.params.category)

    if(category) {
        res.json(createPictures(category));
    } else {
        res.status(400);
        res.send('Category not found !');
    }
};

createPictures = function(category) {
    var pictures = [];
    var picturesName = fs.readdirSync('./pictures/' + category);
    for(const pictureName of picturesName) {
        pictures.push({
            url: '/' + category + "/" + pictureName,
            category: category,
            isShowed: true
        });
    }
    return pictures;
}
