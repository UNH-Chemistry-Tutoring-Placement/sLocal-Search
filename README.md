# Dependencies
This uses Node.js. It's already installed on agate! But if you want it installed on your local machine, visit nodejs.org

# Usage
To run this local search solver, type this into your terminal:
`node slocalsearch.js classfile studentfile objectivefile outputfile`
where all the files are listed as command line arguments.

##### File placement
The file paths are relative the directory that you call `node` from. 
So if the the file `Class` is in the same directory as `slocalsearch.js`, but you want to call the program from a higher directory, you would use 
```
node directory/slocalsearch.js directory/Class [other arguments]
```
If the file `Class` is in the higher directory, then use 
``` node directory/slocalsearch.js Class [other arguments]

if you execute in the same directory as everything just use
``` node slocalsearch Class [other arguments]

