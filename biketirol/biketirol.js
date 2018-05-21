/*
    Vorbereitung: GPX Track herunterladen und nach GeoJSON konvertieren
    -------------------------------------------------------------------
    Datenquelle https://www.data.gv.at/suche/?search-term=bike+trail+tirol&searchIn=catalog
    Download Einzeletappen / Zur Ressource ...
    Alle Dateien im unterverzeichnis data/ ablegen
    Die .gpx Datei der eigenen Etappe als etappe00.gpx speichern
    Die .gpx Datei über https://mapbox.github.io/togeojson/ in .geojson umwandeln und als etappe00.geojson speichern
    Die etappe00.geojson Datei in ein Javascript Objekt umwandeln und als etappe00.geojson.js speichern

    -> statt 00 natürlich die eigene Etappe (z.B. 01,02, ...25)
*/	//CHECK

// eine neue Leaflet Karte definieren

// Grundkartenlayer mit OSM, basemap.at, Elektronische Karte Tirol (Sommer, Winter, Orthophoto jeweils mit Beschriftung) über L.featureGroup([]) definieren
// WMTS URLs siehe https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol

// Maßstab metrisch ohne inch

// Start- und Endpunkte der Route als Marker mit Popup, Namen, Wikipedia Link und passenden Icons für Start/Ziel von https://mapicons.mapsmarker.com/

// GeoJSON Track als Linie in der Karte einzeichnen und auf Ausschnitt zoomen
// Einbauen nicht über async, sondern über ein L.geoJSON() mit einem Javascript Objekt (wie beim ersten Stadtspaziergang Wien Beispiel)

// Baselayer control für OSM, basemap.at, Elektronische Karte Tirol hinzufügen

// Overlay controls zum unabhängigem Ein-/Ausschalten der Route und Marker hinzufügen




let myMap = L.map("map");
const trackGroup = L.featureGroup();
const markerGroup = L.featureGroup();


let myLayers = {
   osm : L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        subdomains : ["a", "b", "c"], 
        attribution : "Datenquelle: <a href='https://www.openstreetmap.org'>© OpenStreetMap-Mitwirkende</a>"
    }
    ),
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
    }
    ), 
    bmapoverlay: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    tirolsommer : L.tileLayer(
    	"http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
    	attribution: "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>data.gv.at</a>"
    }
    ),
    tirolwinter : L.tileLayer(
    	"http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
    	attribution: "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>data.gv.at</a>"
    }
    ),
    tirolortho : L.tileLayer(
    	"http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
    	attribution: "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>data.gv.at</a>"
    }
    ),
    tirolname : L.tileLayer(
    	"http://wmts.kartetirol.at/wmts/gdi_nomenklatur/GoogleMapsCompatible/{z}/{x}/{y}.png8", {
    	attribution: "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>data.gv.at</a>"
    }
    ),
};


myMap.addLayer(myLayers.geolandbasemap);


const tirisSommer = L.layerGroup([
    myLayers.tirolsommer,
    myLayers.tirolname
]);
const tirisWinter = L.layerGroup([
    myLayers.tirolwinter,
    myLayers.tirolname
]);
const tirisOrtho = L.layerGroup([
    myLayers.tirolortho,
    myLayers.tirolname
]);


let myMapControl = L.control.layers({
    "Openstreetmap" : myLayers.osm,
    "Basemap" : myLayers.geolandbasemap,
    "Sommer" : tirisSommer,
    "Winter" : tirisWinter,
    "Orthofoto" : tirisOrtho,
}, {
    "Overlay" : myLayers.bmapoverlay,
    "Start-Ziel" : markerGroup,
   	"Route" : trackGroup,
}, {
	position : "topright"
});

myMap.addControl(myMapControl);
myMapControl.expand();

myMap.addControl(new L.Control.Fullscreen());




let myScale = L.control.scale({
    position: "bottomleft",
    metric: true,
    imperial: false,
    maxWidth: 200,
});

myScale.addTo(myMap);



myMap.setView([47.267,11.383], 11);



let gpxTrack = new L.GPX ("data/etappe20.gpx", {
    async : true,
}).addTo(trackGroup);

gpxTrack.on("loaded", function(evt) {
    console.log("get distance",evt.target.get_distance().toFixed(0))
    console.log("get_elevation_min",evt.target.get_elevation_min().toFixed(0))
    console.log("get_elevation_max",evt.target.get_elevation_max().toFixed(0))
    console.log("get_elevation_gain",evt.target.get_elevation_gain().toFixed(0))
    console.log("get_elevation_loss",evt.target.get_elevation_loss().toFixed(0))
    let laenge = evt.target.get_distance().toFixed(0);
    document.getElementById("laenge").innerHTML = laenge;
    myMap.fitBounds(evt.target.getBounds());
}).addTo(myMap);




/* GeoJson einbinden über Objekt in einer .js Datei

let geojson = L.geoJSON(traildata).addTo(trailGroup);

myMap.addLayer(trailGroup);

myMap.fitBounds(trailGroup.getBounds());
*/



let startIcon = L.icon({
	iconUrl: './images/start.png'
})


let endIcon = L.icon({
	iconUrl: './images/end.png'
})

const start = [47.298546,11.665867];
const end = [47.261733,11.553046];

let startMarker = L.marker(start, {
	icon: startIcon
}).addTo(markerGroup)

let endMarker = L.marker(end, {
	icon: endIcon
}).addTo(markerGroup)



startMarker.bindPopup("<p>Start<br /><a href='https://de.wikipedia.org/wiki/Weerberg'>Weerberg</a>").openPopup();
endMarker.bindPopup("<p>Ende<br /><a href='https://de.wikipedia.org/w/index.php?title=Windegg_(Gemeinde_Tulfes)&action=edit&redlink=1'>Windegg</a>").openPopup();

myMap.addLayer(markerGroup);
myMap.fitBounds(markerGroup.getBounds());





