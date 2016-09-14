var index = function (req, res) {
    res.render('plp', {
        head: {title: 'Main Page Title'},
        weather: {
            location: 'London'
        }
    });
};

module.exports = {
    index: index
};
