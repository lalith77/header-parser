const express = require('express')
const app = express()
app.enable('trust proxy');
app.get('/', function (req, res) {
var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
var software=req.headers['user-agent'].split(" ");
var i=1;
var OS="";
while(i<7){
   OS+= software[i] + " ";
   i++;
}
OS=OS.slice(1,-2);
var info= { "ipaddress": ip, "language": req.headers['accept-language'],
            "software": OS};
res.send(info);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
