var fs = require("fs");
var data = "\nLearn Node.js";

//Reading a file
fs.readFile('index.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(" " + data.toString());//printing the date in the textfile
});
//open a file

console.log("opening an existing file");
fs.open('index.txt', 'r+', function(err, fd) {
if (err) {
	return console.error(err);
}
console.log("File opened successfully!");
//read the file
console.log("reading the file");
	
fs.read(fd,  function(err, bytes){
	if (err){
		console.log(err);
	}
	console.log(bytes + " bytes read");
		
	
});
});
//appending the data to the existing file
fs.appendFileSync('index.txt', data, 'utf8');
console.log("Data is appended to file successfully.")
//Deleting the file
console.log("deleting an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
//Renaming the file
fs.rename('sample.txt', 'sample_old.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed.');
  });