let myMap = L.map("mapdiv");	
const sightsGroup = L.featureGroup();
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
};


myMap.addLayer(myLayers.geolandbasemap);	




let myMapControl = L.control.layers({
    "Basemap" : myLayers.geolandbasemap,
    "Orthofoto 30cm" : myLayers.bmaporthofoto30cm,
}, {
    "Basemap Overlay" : myLayers.bmapoverlay,
    "Sehenswürdigkeiten" : sightsGroup,
}, {
	position : "topright"		
});

myMap.addControl(myMapControl);	

myMapControl.expand(); 




let myScale = L.control.scale ({	
	position : "bottomleft",	
	metric : true,	
	imperial : false,	
	maxWidth : 200,	
});

myScale.addTo(myMap);	




let myIcon = L.icon({
    iconUrl: 'camera.png'
})

L.geoJson(sightsdata, {
	pointToLayer: function(geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: myIcon
            })
}
}).addTo(sightsGroup);

myMap.addLayer(sightsGroup);

myMap.fitBounds(sightsGroup.getBounds());

