var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = require('./data/users.json');
var calendar = require('./data/calendar.json');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log("Connexion entrante");
    socket.on('connect_user', function(data){
        username = data.username;
        password = data.password;

        socket.emit('connect_user', {result:connectUser(username, password)});
    });

    socket.on('get_calendar', function(data){
        socket.emit('get_calendar', calendar);
    });

    socket.on('update_calendar', function(calendar){
        curFile = fs.openSync('./data/calendar.json', "w+");
        try{
            fs.writeSync(curFile, JSON.stringify(calendar, null, 2));
            socket.emit('update_calendar', {result:true});
        }
        catch(e){
            socket.emit('update_calendar', {result:false, error:e});
        }
        finally{
            fs.closeSync(curFile);
        }
    })
});

http.listen(3113, function(){
  console.log('listening on *:3113');
});


function connectUser(username, password){
        for (var i = 0; i < users.length; i++) {
            if(users[i].name == username && users[i].password == password)
                return true;
        };
        return false;
}