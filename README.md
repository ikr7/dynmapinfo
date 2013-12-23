#dynmapinfo
Dynmap の情報をいい感じに引っ張ってくるやつです

[English](https://github.com/ikr7/dynmapinfo/blob/master/README.en.md)

インストール
```
% npm install dynmapinfo
```

じゅんび
```
var DynmapInfo = require('dynmapinfo');  
var di = new DynmapInfo('dynmap.URL:port/path'); //←DynmapのURLをわたしてね "http://"はいらないよ
```

つかう
```
di.getPlayers(function(err, data){
  if(!err){
    console.log(data);
  }else{
    console.error(err);
  }
});
```

メソッド一覧
* getWorlds
* getPlayers
* getMarkers
* getTime
* getWeather

引数とか戻り値とかはてきとうにためしてみて  
なにかあったらおしえてね
