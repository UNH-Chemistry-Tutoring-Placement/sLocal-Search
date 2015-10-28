var fs = require('fs'),
	objectiveParser = require('objectiveParser'),
	classParser = require('classParser'),
	studentParser = require('studentParser'),
	args = require('Args');
	ranAssign = require('randomAssignment');


var data = {};

data.objective = objectiveParser(fs.readFileSync(args.objectiveFile || 'objective.txt', {encoding: 'utf8'}));

data.class = classParser(fs.readFileSync('Class', {encoding: 'utf8'}));

data.student = studentParser(fs.readFileSync('student.txt', {encoding: 'utf8'}));

var times = ranAssign(data);

console.log(times);
