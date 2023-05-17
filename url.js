/*
    The URL module is one of the global core objects found in Node. It's primary use is to construct or destruct URL's into their components/
*/

var url = require("url");
var adr = "https://nodejs.org/dist/latest-v18.x/docs/api/url.html#url";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.hash);

// The above lines of code should output the host (nodejs.org), the pathname (dist/latest-v18.x/docs/api/url.html), and the fragment portion of the URL (#url)

// You can also get the url as a string by using the following code:

console.log(q.href);
