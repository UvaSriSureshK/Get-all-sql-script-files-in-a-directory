var walk    = require('walk');
var files   = [];

// Walker options
var walker  = walk.walk('./data-Files', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    // files.push(root + '/' + stat.name); // to cancatinate with their directry
	console.log('stat : '+ JSON.stringify(stat));
	
	// It will take only sql file type only
	if(stat.name.substr(-4) == '.sql') { 
		files.push(stat.name);
	}
    next();
});

walker.on('end', function() {
    console.log(files);
});
