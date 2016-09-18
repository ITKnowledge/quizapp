var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

  var Questions = require("../models/questions");
  var Teams = require("../models/teams");

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

    res.render('equipe', {
      title: 'Quiz'
    });

});


router.get('/quiz', function(req,res){

  Questions.paginate({}, function(err, result) {
  res.json(result);
  });

});


router.get('/team1/:qnum', function(req, res){
  Questions.paginate({}, function(err, limit){
    Questions.paginate({qnum: req.params.qnum}, function(err, result) {
      res.render('team1', {title: "Quiz", team: "Team 1",
                           questions: result,
                           limit: limit.limit
                         });
    });

  });


});

router.get('/team2/:qnum', function(req, res){
  Questions.paginate({}, function(err, limit){
    Questions.paginate({qnum: req.params.qnum}, function(err, result) {
      res.render('team2', {title: "Quiz", team: "Team 2",
                           questions: result,
                           limit: limit.limit
                         });
    });

  });
});

router.get('/team3/:qnum', function(req, res){
  Questions.paginate({}, function(err, limit){
    Questions.paginate({qnum: req.params.qnum}, function(err, result) {
      res.render('team3', {title: "Quiz", team: "Team 3",
                           questions: result,
                           limit: limit.limit
                         });
    });

  });
});


router.get('/team4/:qnum', function(req, res){
  Questions.paginate({}, function(err, limit){
    Questions.paginate({qnum: req.params.qnum}, function(err, result) {
      res.render('team4', {title: "Quiz", team: "Team 4",
                           questions: result,
                           limit: limit.limit
                         });
    });

  });
});

router.get('/team5/:qnum', function(req, res){
  Questions.paginate({}, function(err, limit){
    Questions.paginate({qnum: req.params.qnum}, function(err, result) {
      res.render('team5', {title: "Quiz", team: "Team 5",
                           questions: result,
                           limit: limit.limit
                         });
    });

  });
});


router.post('/answer', function(req, res){
  Teams.findOne({teamname: req.body.teamname}, function(err, team){
    var obj = {
                qnum: req.body.qnum,
                answer: req.body.question1,
                score: (req.body.question1 == req.body.answer)?1:0,
                Quiz: req.body.Quiz
    }
    team.answers.push(obj);
    team.update({
    answers: team.answers
  }, function (err, teamID){
    if(err){
      console.log('GET Error: There was a problem retrieving: ' + err);
      res.redirect('/');
    }else{
      var nextq = Number(req.body.qnum) + 1;
      if (nextq > req.body.limit ){
        res.redirect('/end');
      }else{
        res.redirect('/'+req.body.teamname.split(' ').join('')+'/'+ nextq);
      }

    }
  })

  })

});

router.get('/end', function(req, res){
  res.render('end', {title: "End of the Quiz"});
});
