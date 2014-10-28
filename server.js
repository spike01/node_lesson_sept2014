var server = require('express')();
var http = require('http').createServer(server);

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.send('<h1>Hello world!</h1>')
});

server.get('/page2', function(request, response){
  response.send('This is page 2')
});

server.get('/page3', function(request, response){
  response.render('index');
});

http.listen(3000, function(){
  console.log('Listening on port 3000')
});




