let myMap = L.map("mapdiv");	//http://leafletjs.com/reference-1.3.0.html#map-l-map
const awsGroup = L.featureGroup();
let myLayers = {
    osm : L.tileLayer(	//http://leafletjs.com/reference-1.3.0.html#tilelayer
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        subdomains : ["a", "b", "c"], 
        attribution : "Datenquelle: <a href='https://www.openstreetmap.org'>© OpenStreetMap-Mitwirkende</a>"
    }
    ),
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],	//http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"	//http://leafletjs.com/reference-1.3.0.html#layer-attribution
    }
    ),
    bmapoverlay : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmapgrau : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaphidpi : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
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


myMap.addLayer(myLayers.bmapgrau);	//http://leafletjs.com/reference-1.3.0.html#map-addlayer



let myMapControl = L.control.layers({	//http://leafletjs.com/reference-1.3.0.html#control-layers-l-control-layers
    "Openstreetmap" : myLayers.osm,
    "Basemap" : myLayers.geolandbasemap,
    
    "Basemap grau" : myLayers.bmapgrau,
    "Basemap high dpi" : myLayers.bmaphidpi,
    "Orthofoto 30cm" : myLayers.bmaporthofoto30cm,
}, {
    "Basemap Overlay" : myLayers.bmapoverlay,
    "Wetterstationen" : awsGroup,
}, {
	position : "topright"		//http://leafletjs.com/reference-1.3.0.html#control-position
});

myMap.addControl(myMapControl);	//http://leafletjs.com/reference-1.3.0.html#map-addcontrol


myMap.setView([47.267,11.383], 11);	//http://leafletjs.com/reference-1.3.0.html#map-setview


myMapControl.expand(); //http://leafletjs.com/reference-1.3.0.html#control-layers-expand


let myScale = L.control.scale ({	//http://leafletjs.com/reference-1.3.0.html#control-scale
	position : "bottomleft",	//http://leafletjs.com/reference-1.3.0.html#control-position
	metric : true,	//http://leafletjs.com/reference-1.3.0.html#control-scale-metric
	imperial : false,	//http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
	maxWidth : 200,	//http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
});

myScale.addTo(myMap);	

console.log("Stationen: ", stationen);

myMap.addLayer(awsGroup);
let geojson = L.geoJSON(stationen).addTo(awsGroup);
geojson.bindPopup(function(layer) {
    const props = layer.feature.properties;
    const popupText = `<h1>${props.name}</h1>
    <p>Temperatur: ${props.LT} °C</p>`;
   return popupText;
});

myMap.fitBounds(awsGroup.getBounds());