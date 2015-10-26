var fs = require('fs');

var objective = fs.readFileSync('objective.txt', {encoding: 'utf8'});

var classFile = fs.readFileSync('class.txt', {encoding: 'utf8'});

var studentFile = fs.readFileSync('student.txt', {encoding: 'utf8'});



console.log(objective);