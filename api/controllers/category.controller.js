var fs = require('fs');

const folders = fs.readdirSync('./pictures/');

exports.list_all_categories = function(req, res) {
    const categories = [];
    for(const folder of folders) {
        var pictures = fs.readdirSync('./pictures/' + folder);
        categories.push({
            name: folder,
            firstPic: '/' + folder + '/' + pictures[0]
        });
    }
    res.json(categories);
};
