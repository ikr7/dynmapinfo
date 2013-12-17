
var request = require('request');

function DynmapInfo(url){
	var me = this;
	me.url = 'http://' + url;
};

module.exports = DynmapInfo;

DynmapInfo.prototype.getWorlds = function(callback){
	var me = this;
	request.get({
		'uri': me.url + '/up/configuration', 
		'json': true
	}, function(error, res, body){
		if(error){
			callback(error);
		}else{
			var worlds = [];
			body.worlds.forEach(function(ele, index, arr){
				worlds.push({
					'name': ele.name, 
					'title': ele.title
				});
			});
			callback(null, worlds);
		}
	});
};

DynmapInfo.prototype.getPlayers = function(callback){
	var me = this;
	request.get({
		'uri': me.url + '/up/world/world/0', 
		'json': true
	}, function(error, res, body){
		if(error){
			callback(error);
		}else{
			var players = {
				'playerCount': body.players.length, 
				'players': []
			};
			body.players.forEach(function(ele, index, arr){
				players.players.push({
					'account': ele.account, 
					'armor': ele.armor, 
					'health': ele.health, 
					'name': ele.name, 
					'world': ele.world, 
					'x': ele.x, 
					'y': ele.y, 
					'z': ele.z, 
					'face_image_url': me.url + '/tiles/faces/32x32/' + ele.account + '.png'
				});
			});
			callback(null, players);
		}
	});
};

DynmapInfo.prototype.getMarkers = function(worldname, callback){
	var me = this;
	request.get({
		'uri': me.url + '/tiles/_markers_/marker_' + worldname + '.json', 
		'json': true
	}, function(error, res, body){
		if(error){
			callback(error);
		}else{
			var markers = [];
			for(var markerset in body.sets){
				for(var marker in body.sets[markerset].markers){
					markers.push({
						'name': marker, 
						'label': body.sets[markerset].markers[marker].label, 
						'x': body.sets[markerset].markers[marker].x, 
						'y': body.sets[markerset].markers[marker].y, 
						'z': body.sets[markerset].markers[marker].z, 
						'icon_image_url': me.url + '/tiles/_markers_/' + body.sets[markerset].markers[marker].icon + '.png'
					});
				}
			}
			callback(null, markers)
		}
	});
};

DynmapInfo.prototype.getTime = function(callback){
	var me = this;
	request.get({
		'uri': me.url + '/up/world/world/0', 
		'json': true
	}, function(error, res, body){
		if(error){
			callback(error);
		}else{
			var servertime = parseInt(body.servertime);
			callback(null, {
				'isDay': servertime >= 0 && servertime < 13700, 
				'hours': (parseInt(servertime / 1000) + 6) % 24,
				'minutes': parseInt(((servertime / 1000) % 1) * 60),
				'seconds': parseInt(((((servertime / 1000) % 1) * 60) % 1) * 60)
			});				
		}
	});
};

DynmapInfo.prototype.getWeather = function(worldname, callback){
	var me = this;
	request.get({
		'uri': me.url + '/up/world/' + worldname + '/0', 
		'json': true
	}, function(error, res, body){
		if(error){
			callback(error);
		}else{
			var weather = {
				'hasStorm': body.hasStorm, 
				'isThundering': body.isThundering
			};
			callback(null, weather);			
		}
	});
};
