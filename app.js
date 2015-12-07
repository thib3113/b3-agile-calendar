var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = require('data/users.json');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3113, function(){
  console.log('listening on *:3113');
});