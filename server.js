// link to connect & url
let connect = require('connect');
let url = require('url');

let app = connect();

// calculator 
// calculate function that parses the url for 3 parameters: method, x, and y
let calculator = function(req, res, next) {
  // get the full querystring 
  let qs = url.parse(req.url, true).query;
  // get values from querystring
  let method = qs.method;
  let x = qs.x;
  let y = qs.y;

  let opsign = "";
  // calculate 
  if (method == 'add') {
      result = x + y;
      opsign = ' + ';
  }
  else if (method == 'subtract') {
      result = x - y;
      opsign = " - ";
  }
  else if (method == 'divide') {
      result = x / y;
      opsign = " / ";
  }
  else if (method == 'multiply') {
      result = x * y;
      opsign = " * ";
  }
  else {
      throw new Error('Undefined method input. Please try again.');
  }

  // Display the full math operation and its result on the page in this format: 
  // x [method] y = [result]
  res.end('<h1>Calculator</h1>' +
      x + opsign + y + ' = ' + result);
};

// map the url's to the correct virtual pages
app.use('/lab2', calculator);
// root url 
app.use('/', calculator);

// start the connect http server
let port = process.env.PORT || 3000;
app.listen(port);
console.log('Connect server running on port 3000');
