const commands = require('./commands');

const print = function(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {

  let args = data.toString().trim(); // remueve la nueva línea
  args = args.split(' ');
  
  let cmd = args.shift();

  if(commands[cmd]){
    commands[cmd](args,print);
  }else{
    // Command not found
    print('cmd not faound');
  }

  
});