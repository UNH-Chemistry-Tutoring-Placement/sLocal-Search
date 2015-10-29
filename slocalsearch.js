var fs = require('fs'),
	objectiveParser = require('objectiveParser'),
	classParser = require('classParser'),
	studentParser = require('studentParser'),
	args = require('Args'),
	ranAssign = require('randomAssignment'),
    grader = require('Grade').grade,
	graderWith = require('Grade').gradeWith,
	graderWithout = require('Grade').gradeWithout;

var data = {};

data.objective = objectiveParser(fs.readFileSync(args.objectiveFile || 'objective.txt', {encoding: 'utf8'}));

data.class = classParser(fs.readFileSync('Class', {encoding: 'utf8'}));

data.student = studentParser(fs.readFileSync('student.txt', {encoding: 'utf8'}));

var times = ranAssign(data);
var studentTest = []
studentTest.push('daseg@wildcats.unh.edu')
studentTest.push('robare@wildcats.unh.edu')
studentTest.push('gemck@wildcats.unh.edu')
studentTest.push('cahol@wildcats.unh.edu')

console.log("orig: " + studentTest)
var grade = grader(data,'Fri 14:00-15:00',studentTest);
var gradeWith = graderWith(data,'Fri 14:00-15:00',studentTest,'amsal@wildcats.unh.edu');
var gradeWithout = graderWithout(data,'Fri 14:00-15:00',studentTest,'daseg@wildcats.unh.edu');


console.log("grade: " + grade);
console.log("gradeWith: " + gradeWith);
console.log("gradeWithout: " + gradeWithout);
