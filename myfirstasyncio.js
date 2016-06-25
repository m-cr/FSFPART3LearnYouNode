var fs = require('fs')

fs.readFile(process.argv[2], function(error, data){
	console.log(data.toString().split('\n').length - 1);
})

// console.log(numLines);