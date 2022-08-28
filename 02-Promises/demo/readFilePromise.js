var fs = require('fs');



var promise = new Promise(function(resolve, reject) {
  // Hacer cosas acá dentro, probablemente asincrónicas.
  fs.readFile('./archivo.txt', 'utf8', function(err, data) { 
    if (err) {
      return reject(Error("Algo se rompió"));
    }
    //console.log(data);    
    resolve(data);
  }); 
});

// var nuevaDataPromesa = promise.then(function(data) {
//   var nuevaData = data.split('').splice(0, 100).join('');
//   return nuevaData;
// })

console.log('1. ', promise);

promise.then(function(data) {
  console.log('se cumplió la promesa');
  console.log('2. ', data);
}, err => {
  console.log('4. ', err);
})


console.log('3. Holii');

var lectura;
fs.readFile('./archivo.txt', 'utf8', function(err, data) { 
  lectura = data;
}); 

console.log(lectura);





  //  dataBase.verifyUser(username, password, (error, userInfo) => {
  //      if (error) {
  //          callback(error)
  //      }else{
  //          dataBase.getRoles(username, (error, roles) => {
  //              if (error){
  //                  callback(error)
  //              }else {
  //                  dataBase.logAccess(username, (error) => {
  //                      if (error){
  //                          callback(error);
  //                      }else{
  //                          callback(null, userInfo, roles);
  //                      }
  //                  })
  //              }
  //          })
  //      }
  //  })
