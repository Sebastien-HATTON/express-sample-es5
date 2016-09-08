var express = require('express');
var app = express();

var PORT = 8432;

/*
 * This is used to get the total time a request takes to process
 */
app.use(function(req, res, next) {
  var startTime = Date.now();

  next();
  var timeToProcess = Date.now() - startTime;
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  console.log(req.method + ' ' + fullUrl + ' - ' + timeToProcess + ' ms');
});

/*
 * What do you think will happen here?
 * What do you think will happen if you comment out the next(); line?
 */
app.use(function(req, res, next) {
  console.log('before next');
  next();
  console.log('after next');
});

app.get('/', function (req, res) {
  console.log('success!');
  res.send({
    success: true
  });
});

/*
 * Do you think this function will be reached?
 */
app.use(function(req, res, next) {
  console.log('will I be reached?');
});

app.listen(PORT, function () {
  console.log('Server started on port: ' + PORT);
});
