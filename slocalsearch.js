var fs = require('fs'),
	objectiveParser = require('objectiveParser'),
	studentParser = require('studentParser');

var objective = objectiveParser(fs.readFileSync('objective.txt', {encoding: 'utf8'}));

var students = studentParser(fs.readFileSync('student.txt', {encoding: 'utf8'}));

//var classFile = fs.readFileSync('class.txt', {encoding: 'utf8'});

//var studentFile = fs.readFileSync('student.txt', {encoding: 'utf8'});

console.log(objective);
console.log(students);