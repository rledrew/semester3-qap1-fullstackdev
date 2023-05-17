/*
    Filesystem is a core global object included in Node. It's primary function is to read, write, and delete files.
    It also has functionality built in for promises which allow asynchronous execution of code. 
*/

var fs = require("fs");

// the writeFile() method will create a specified filename and fill it with the given input. If the file already exists, it will overwrite that file.

fs.writeFile("test.txt", "Get your snacks", function (err) {
  if (err) throw err;
  console.log("File has been created");
});

// The appendFile() method will append input to an existing file, or if it does not exist yet create it and fill it with the given input.

fs.appendFile("test.txt", "\nSnacks aquired", function (err) {
  if (err) throw err;
  console.log("File has been appended/created");
});
