var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

  var Questions = require("../models/questions");
  var Teams = require("../models/teams");

module.exports = function (app) {
  app.use('/admin', router);
};


router.get('/', function(req, res){
  var scoreIM = 0;
  var scoreIS = 0;
  var tt = [];
  var bb = [];
  var team1 = [];
  var team2 = [];
  var team3 = [];
  var team4 = [];
  var team5 = [];

  Teams.find(function(err, team){

    for(i = 0; i< team.length; i++){
      for(j=0; j<team[i].answers.length; j++){
        if(team[i].answers[j].Quiz == "Incident  Management"){
          scoreIM = scoreIM + team[i].answers[j].score;
        }else if(team[i].answers[j].Quiz == "IT Security"){
          scoreIS = scoreIS + team[i].answers[j].score;
        }
      }
      tt.push({teamname: team[i].teamname, scoreIM: scoreIM, scoreIS: scoreIS});
      switch (team[i].teamname) {
        case "Team 1":
          //console.log("team1");
          team1 = [scoreIM, scoreIS];
          //console.log(team1);
          break;
        case "Team 2":
          //console.log("team2");
          team2 = [scoreIM, scoreIS];
          //console.log(team2);
          break;
        case "Team 3":
          //console.log("team3");
          team3 = [scoreIM, scoreIS];
          //console.log(team3);
          break;
        case "Team 4":
          //console.log("team4");
          team4 = [scoreIM, scoreIS];
          //console.log(team4);
          break;
        case "Team 5":
          //console.log("team5");
          team5 = [scoreIM, scoreIS];
          //console.log(team5);
          break;


        default:

      }
      scoreIM = 0;
      scoreIS = 0;
    }

    bb = [10, 20];


    res.render('score', {title: "Score screen",score: tt, bb: bb, team1: team1, team2: team2, team3: team3, team4: team4, team5: team5});
    //res.end(d3.select('body').node().innerHTML);
  });


});
