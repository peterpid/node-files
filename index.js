var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
	if (err) {
		throw err;
	}
	console.log('File stat "./cat.jpg" ...'); 
	console.log(stats);
	var statMode = new StatMode(stats);
    console.log('Permissions for "./cat.jpg": ', statMode.toString());
});

function readDirectory(inFilePath) {
	fs.readdir(inFilePath, 'utf-8', function(err, files) {
		if (err) {
			throw err;
		}
		if (files === null) {
			process.stderr.write('ERROR while listing directory: ', inFilePath);
			return;
		}
		console.log('Reading directory "', inFilePath, '" ...'); 
		console.log(files);
		let outFilePath = inFilePath + '-list.txt'; 
		fs.writeFile(outFilePath, files.join('\n'), 'utf-8', function(err) {
			if (err) {
				throw err;
			}
			console.log('Output file "', outFilePath ,'" has been saved successfully!');
		});
	});
}

readDirectory('./node_modules');