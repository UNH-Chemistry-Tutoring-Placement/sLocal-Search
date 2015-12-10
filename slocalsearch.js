var FileIO = require('FileData'),
    args = require('Yargs'),
    regularSwap = require('Swappers/RegularSwap'),
    existingSwap = require('Swappers/ExistingSwap');
    //AWSswap = require('Swappers/AWS');


//load the data from file
FileIO.load(function(){
    
    var results;
    
    if (args.swapType === "regular")
        results = regularSwap();
    
    else if (args.swapType === "improve")
        results = existingSwap();
    
   // else if (args.swapType === "aws")
     //   results = AWSswap();
    
    FileIO.out(results.grade, results.assignments);

});