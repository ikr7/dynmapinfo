#dynmapinfo

[日本語](https://github.com/ikr7/dynmapinfo/blob/master/README.md)

Asynchronous Dynmap client

Installation
```
% npm install dynmapinfo
```

Initialization
```
var DynmapInfo = require('dynmapinfo');  
var di = new DynmapInfo('dynmap.URL:port/path'); // <= set Dynmap URL(without "http:_/")
```

Usage
```
di.getPlayers(function(err, data){
  if(!err){
    console.log(data);
  }else{
    console.error(err);
  }
});
```

Methods
* getWorlds
* getPlayers
* getMarkers
* getTime
* getWeather

Uho, good module...
