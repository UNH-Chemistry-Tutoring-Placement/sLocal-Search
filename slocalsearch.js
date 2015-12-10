var Data = require('FileData'),
    swap = require('Swap'),
    tests = require('Tests'),
    aws = require('AWS'),
    out = require("FileData").out;


//load the data from file
Data.load(function(){

    //tests.randomAssignment();
    if(process.argv[4] == "aws"){
        aws();
    }
    
    //console.log(out.get());
    var results = swap();
    out(results.grade, results.assignments);

});