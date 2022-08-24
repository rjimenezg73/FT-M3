var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http.createServer( function(req, res){ 
	
  console.log(__dirname);
  console.log(req.url);
  console.log(`${__dirname}/images${req.url}_doge.jpg`);

	fs.readFile(`${__dirname}/images${req.url}_doge.jpg`, (err, data) => {
    if(err){
      res.writeHead(404, { 'Content-type':'text/plain'});
      res.end(`¡ERROR!, archivo ${req.url} no existe... `);
    }else{
      res.writeHead(200, { 'Content-type':'image/jpg'});
      res.end(data);
    }
  });

}).listen(1337, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor