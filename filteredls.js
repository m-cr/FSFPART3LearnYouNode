var fs = require('fs')
var path = require('path')

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err,list){
	// console.log(list);
	var filteredArray = [];
	// console.log("ext name", path.extname(list[0]))
	for (var i = 0; i < list.length; i++) {
		if(path.extname(list[i]) == ext)
		filteredArray.push(list[i]); 
	}
	console.log(filteredArray.join('\n'));
});