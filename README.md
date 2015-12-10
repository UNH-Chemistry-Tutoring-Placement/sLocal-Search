# Dependencies
This uses Node.js. It's already installed on agate! But if you want it installed on your local machine, visit nodejs.org

# Usage
To run this local search solver, type this into your terminal:
```
node slocalsearch.js timeToRunInSeconds outputFileName algorithmName < thatOneFileWithAllTheInfo
```
where all the files are catted together and given to the program on stdin

##### Algorithm Name
- `ommited` defaults to the regular search
- `improve` looks for a solution on standard in and tries to improve that solution
- `ams` 
- `swo` squeeky wheel optimization

