var http = require('http');
var fs   = require('fs');
const { encode } = require('punycode');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer((req, res) => {
  if(req.url === '/api'){
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(beatles));
  }
  if(req.url.substring(0, 5) === '/api/' && req.url.length > 5){
    let encuentraBeatle = req.url.split('/').pop();
    let seEncuentraBeatle = beatles.find((encontrado) => encuentraBeatle === encodeURI(encontrado.name));
    if(seEncuentraBeatle){
      res.writeHead(200, {'Content-type':'application/json'});
      res.end(JSON.stringify(seEncuentraBeatle));
    }else{
      res.writeHead(404, {'Content-type':'text/plain'});
      res.end('Este Beatle no existe');
    }
  }

  if(req.url === '/'){
    res.writeHead(200, {'Content-type':'text/html'});
    const indexFile = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
    res.end(indexFile);

  }

   let encuentraBeatle = req.url.split('/').pop();
   let seEncuentraBeatle = beatles.find((encontrado) => encuentraBeatle === encodeURI(encontrado.name));
   if(seEncuentraBeatle){
     res.writeHead(200, {'Content-type':'text/html'});
     let readFileHTML = fs.readFileSync(`${__dirname}/beatle.html`, 'utf-8');
     console.log(`${__dirname}/beatle.html`);
     console.log(seEncuentraBeatle.name);
   
     readFileHTML = readFileHTML.replace(/{name}/g,seEncuentraBeatle.name);
     readFileHTML = readFileHTML.replace('{birthdate}',seEncuentraBeatle.birthdate);
     readFileHTML = readFileHTML.replace('{profilePic}',seEncuentraBeatle.profilePic);
     res.end(readFileHTML);
   }else{
     res.writeHead(404, {'Content-type':'text/plain'});
     res.end('Este Beatle no existe');
   }


}).listen(1338, '127.0.0.1');