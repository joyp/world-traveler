'use strict';

exports.newVacation = function(req,res){
  res.render('vacations/new');
};

exports.create = function(req,res){
  console.log(req);
};
