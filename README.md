# Dependencies
This uses Node.js. It's already installed on agate! But if you want it installed on your local machine, visit nodejs.org

# Usage
To run this local search solver, type this into your terminal:
`node slocalsearch.js classfile studentfile objectivefile outputfile`
where all the files are listed as command line arguments.

##### File placement
The file paths are relative to the `slocalsearch.js` file. So if the file `Class.txt` is in the same directory as `slocalsearch.js`, you would run `node slocalsearch.js Class.txt [other args]`. But if the file `Class.txt` is in the directory above `slocalsearch.js`, you would run `node slocalsearch.js ../Class.txt [other args]`

