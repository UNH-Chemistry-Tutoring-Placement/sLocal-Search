var fs = require('fs'),
	objectiveParser = require('objectiveParser'),
	classParser = require('classParser'),
	studentParser = require('studentParser'),
	args = require('Args');


var objective = objectiveParser(fs.readFileSync(args.objectiveFile || 'objective.txt', {encoding: 'utf8'}));

var classFile = classParser(fs.readFileSync('Class', {encoding: 'utf8'}));

var studentFile = studentParser(fs.readFileSync('student.txt', {encoding: 'utf8'}));

