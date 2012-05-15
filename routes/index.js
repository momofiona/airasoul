var config = require('../config/config');

exports.index = function(req, res){
  console.log('- airasoul request');
  res.render('index', { title: config.title});
};