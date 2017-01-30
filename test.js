// link to connect & url
let app = connect();
let url = require('url');

// calculator 
// calculate function that parses the url for 3 parameters: method, x, and y
let calculator = function(req, res, next) {
  // get the full querystring 
  let qs = url.parse(req.url, true).query;
  // get method value from querystring
  let method = qs.method;

  // calculate 
  let hst = amount * .13;
  let total = parseFloat(hst) + parseFloat(amount);

  // Display the full math operation and its result on the page in this format: x [method] y = [result]
  res.end('<h1>Calculator</h1>' +
      x + method + y + '=' + result);
};

// 404
let notFound = function(req, res, next) {
  res.writeHead(404);
  res.end('Not Found');
};



// map the url's to the correct virtual pages
app.use('/cal', calculator);
// root url should be the last
app.use('/', calculator);


// start the connect http server
let port = process.env.PORT || 3000
app.listen(port);
console.log('Connect server running on port 3000');
