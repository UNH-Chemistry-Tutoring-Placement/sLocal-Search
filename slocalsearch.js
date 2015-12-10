var FileIO = require('FileData'),
    args = require('Yargs'),
    regularSwap = require('Swappers/RegularSwap'),
    existingSwap = require('Swappers/ExistingSwap'),
    AMSswap = require('Swappers/AMS'),
    swoSwap = require('Swappers/SWO');


//load the data from file
FileIO.load(function(){
    
    var results;
    
    if (args.swapType === "regular")
        results = regularSwap();
    
    else if (args.swapType === "improve")
        results = existingSwap();
    
    else if (args.swapType === "ams")
        results = AMSswap();

    else if (args.swapType === "swo")
        results = swoSwap()

    console.log("Grade: " + results.grade)
    FileIO.out(results.grade, results.assignments);

});