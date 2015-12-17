var Data = require('FileData'),
    Grader = require('Grade');


//load the data from file
Data.load(function(){ 
    var a = Data.get().assignment;
    var grade = Grader.gradeTotal(a);
    console.log(grade);
    
});
