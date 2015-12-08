var Data = require('FileData'),
    swap = require('Swap'),
    tests = require('Tests'),
    aws = require('AWS');


//load the data from file
Data.load(function(){

    //tests.randomAssignment();
    if(process.argv[4] == "aws"){
        aws();
    }
    var results = swap();

});