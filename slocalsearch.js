var fs = require('fs'),
	objectiveParser = require('objectiveParser'),
	classParser = require('classParser'),
	studentParser = require('studentParser'),
	args = require('Args');


var data = {};

data.objective = objectiveParser(fs.readFileSync(args.objectiveFile || 'objective.txt', {encoding: 'utf8'}));

data.class = classParser(fs.readFileSync('Class', {encoding: 'utf8'}));

data.student = studentParser(fs.readFileSync('student.txt', {encoding: 'utf8'}));

console.log(data);
