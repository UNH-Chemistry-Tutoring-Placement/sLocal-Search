var ranAssign = require('randomAssignment'),
    grader = require('Grade').grade,
	graderWith = require('Grade').gradeWith,
	graderWithout = require('Grade').gradeWithout,
    Data = require('FileData');

//load the data from file
Data.load();

var data = Data.get();

var times = ranAssign(data);
var studentTest = []
studentTest.push('daseg@wildcats.unh.edu')
studentTest.push('robare@wildcats.unh.edu')
studentTest.push('gemck@wildcats.unh.edu')
studentTest.push('cahol@wildcats.unh.edu')

console.log("orig: " + studentTest)
var grade = grader('Fri 14:00-15:00',studentTest);
var gradeWith = graderWith('Fri 14:00-15:00',studentTest,'amsal@wildcats.unh.edu');
var gradeWithout = graderWithout('Fri 14:00-15:00',studentTest,'daseg@wildcats.unh.edu');


console.log("grade: " + grade);
console.log("gradeWith: " + gradeWith);
console.log("gradeWithout: " + gradeWithout);
