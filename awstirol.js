let myMap = L.map("mapdiv");
let markerGroup = L.featureGroup();
myMap.addLayer(markerGroup);
let myLayers = {
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
    }
    ),
    bmaporthofoto30cm : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
    }
    ),
};

myMap.addLayer(myLayers.geolandbasemap);

myMap.setView([47.267,11.383], 11);



let myMapControl = L.control.layers({
    "Basemap" : myLayers.geolandbasemap,
    "Orthofoto 30cm" : myLayers.bmaporthofoto30cm,
}, {
    "Wetterstationen" : markerGroup,
}, {
	position : "topright",
	collapsed : false,
});

myMap.addControl(myMapControl);



let myScale = L.control.scale ({
	position : "bottomleft",
	metric : true,
	imperial : false,
	maxWidth : 200,
});

myScale.addTo(myMap);	