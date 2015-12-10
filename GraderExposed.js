var Data = require('FileData'),
    Grader = require('Grade');


//load the data from file
Data.load(function(){ 

    console.log(Grader.gradeTotal(Data.get().assignment));
    
});
