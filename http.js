/*
        For this module, I used the Nodejs official documentation, as well as the documentation for The Cat API. 

        HTTP is one of the core modules bundled with Node. Being a low-level API, it's primary functions are creating web servers and communicating with other web servers. 
    When a server is hosted using HTTP, you can listen to incoming requests and respond to them, as well as define routes. Requests can include things like GET, POST, PUT, DELETE, etc...
*/
//  Including the HTTP modue using the require() method
// var http = require("http");

// Sending basic text over HTTP

// http
//   .createServer(function (req, res) {
//     res.write("Listen to the music"); //    Message to send via the server
//     res.end(); //   End of response
//   })
//   .listen(8080); //   Setting port to listen on

//  HTTP can also be used to call an API, in this case we will use HTTPS as the API I am testing with uses that.
const https = require("https");

const apiEndpoint = "https://api.thecatapi.com/v1/images/search";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key":
      "live_ZEoxYBIhvCEfn5cLWAXZkFI5bTIYYnSQYgWVkHbUxGnrrPUdQ0PQyKbIfu3DJ9ng",
  },
};

const request = https.request(apiEndpoint, options, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    console.log(data);
  });
});

request.end();
