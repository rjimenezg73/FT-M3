let fs = require('fs');
let request = require('request')

module.exports = {
  ls: function(args,print){
    fs.readdir('.',function(err, files){
      //console.log(files);
      if(err)
        throw err;
      print(files.join('\n'));
    });
  },
  echo: function(args, print){
    print(args.join(' '));
  },
  date: function(args, print){
    print(Date());
  },
  pwd: function(args, print){
    print(process.cwd());
  },
  cat: function(args,print){
    fs.readFile(args[0], 'utf-8' ,function(err, data){
        if(err) 
          throw err;
        print(data);
    })
  },
  head: function(args,print){
    fs.readFile(args[0],'utf-8', function(err,data){
        if(err) 
          throw err;
        data.split('\n').splice(0,10).join('\n');
        print(data);
    })
  },
  tail: function(args,print){
    fs.readFile(args[0],'utf-8', function(err,data){
        if(err) 
          throw err;
        data.split('\n').splice(-args[1]).join('\n');
        print(data);
    })
  },
  curl: function(args, print){
    request(args[0], function(err, data){
        if(err) 
          throw err
        print(data.body);
    })
  }
}