let myMap = L.map("mapdiv");	
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
};


myMap.addLayer(myLayers.geolandbasemap);	




let myMapControl = L.control.layers({
    "Basemap" : myLayers.geolandbasemap,
    "Orthofoto 30cm" : myLayers.bmaporthofoto30cm,
}, {
    "Basemap Overlay" : myLayers.bmapoverlay,
    "Citybike Standpunkte" : bikeGroup,
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
    iconUrl: 'bikes.png'
})

let geojson = L.geoJson(citybikedata, {
	pointToLayer: function(geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: myIcon
            })
}
}).addTo(bikeGroup);


geojson.bindPopup(function(layer) {
	const props = layer.features.properties;
	const popupText = `<h1>${props.NAME}</h1>
	<p>Adresse: ${props.ADRESSE}</p>`;
	return popupText;
});

myMap.addLayer(bikeGroup);

myMap.fitBounds(bikeGroup.getBounds());





