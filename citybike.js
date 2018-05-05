let myMap = L.map("mapdiv");	//http://leafletjs.com/reference-1.3.0.html#map-l-map
const bikeGroup = L.featureGroup();
let myLayers = {
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"	
    }
    ),
    bmapoverlay : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
    }
    ),
    bmaporthofoto30cm : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
}


myMap.addLayer(myLayers.bmapgrau);	



let myMapControl = L.control.layers({	
    "Openstreetmap" : myLayers.osm,
    "Basemap" : myLayers.geolandbasemap,
    "Basemap grau" : myLayers.bmapgrau,
    "Basemap high dpi" : myLayers.bmaphidpi,
    "Orthofoto 30cm" : myLayers.bmaporthofoto30cm,
}, {
    "Basemap Overlay" : myLayers.bmapoverlay,
}, {
	position : "topright"		
});

myMap.addControl(myMapControl);	


// myMap.setView([47.267,11.383], 11);	


myMapControl.expand(); 


let myScale = L.control.scale ({	
	position : "bottomleft",	
	metric : true,	
	imperial : false,	
	maxWidth : 200,	
});

myScale.addTo(myMap);	






