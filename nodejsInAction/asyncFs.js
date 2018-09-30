var fs = require('fs');
fs.readFile('./resource.json', function(err, data){
    console.log("reading file...")
    console.log(data);
})
console.log('After readFile().');