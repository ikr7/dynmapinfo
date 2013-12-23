#dynmapinfo
Asynchronous Dynmap client

Installation
```
% npm install dynmapinfo
```

Initialization
```
var DynmapInfo = require('dynmapinfo');  
var di = new DynmapInfo('dynmap.URL:port/path'); //←DynmapのURLをわたしてね "http://"はいらないよ
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
