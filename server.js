var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = require('data/users.json');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
    socket.on('connect_user', function(data){
        username = data.username;
        password = data.password;

    })
});

http.listen(3113, function(){
  console.log('listening on *:3113');
});


function connectUser(username, password){
        for (var i = 0; i < users.length; i++) {
            if(users[i].name == username && users[i].password = password)
                return true;
        };
        return false;
}