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



const w1 = [47.387131, 11.133717];
const w2 = [47.312079, 11.383623];
const w3 = [47.346295, 11.080385];
const w4 = [47.346612, 11.083694];
const w5 = [47.336922, 10.862333];
const w6 = [47.344376, 10.849554];
const w7 = [47.394844, 11.152817];
const w8 = [47.345909, 11.104943];
const w9 = [47.342025, 11.227903];
const w10 = [47.3063819943737, 11.3779335010812];
const w11 = [47.448514, 11.751511];
const w12 = [47.441861, 11.762127];
const w13 = [47.069889, 10.862306];
const w14 = [47.0839527777778, 11.0273833333333];
const w15 = [47.1010555555556, 11.0230388888889];
const w16 = [47.071488, 10.76282];
const w17 = [47.099611, 11.15541667];
const w18 = [47.0960000187559, 11.1623888694066];
const w19 = [47.153491, 11.120722];
const w20 = [47.156075, 11.095642];
const w21 = [47.04, 10.7181];
const w22 = [47.154432, 11.303207];
const w23 = [47.0339, 10.8528];
const w24 = [47.181266, 11.751717];
const w25 = [47.192132, 11.767481];
const w26 = [47.2750109996958, 11.7520860028295];
const w27 = [47.271989, 11.755802];
const w28 = [47.093149, 11.648053];
const w29 = [47.089717, 11.648987];
const w30 = [47.121858, 11.661969];
const w31 = [47.120752, 11.658062];

L.marker(w1).addTo(markerGroup).bindPopup("<p>Gehrenspitze<br />Temperatur: 0,6°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png'>aktuelles Wetter</a>").openPopup();
L.marker(w2).addTo(markerGroup).bindPopup("<p>Hafelekar<br />Temperatur: 1,6°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png'>aktuelles Wetter</a>").openPopup();
L.marker(w3).addTo(markerGroup).bindPopup("<p>Hohe Munde Gipfel<br />Temperatur: -<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/woche/hohemunde.png'>aktuelles Wetter</a>").openPopup();
L.marker(w4).addTo(markerGroup).bindPopup("<p>Hohe Munde Windstation<br />Temperatur: -4,1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w5).addTo(markerGroup).bindPopup("<p>Nassereith Wannig<br />Temperatur: -1,2°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png'>aktuelles Wetter</a>").openPopup();
L.marker(w6).addTo(markerGroup).bindPopup("<p>Nassereith Alm<br />Temperatur: 4°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png'>aktuelles Wetter</a>").openPopup();
L.marker(w7).addTo(markerGroup).bindPopup("<p>Puitegg<br />Temperatur: 5,3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png'>aktuelles Wetter</a>").openPopup();
L.marker(w8).addTo(markerGroup).bindPopup("<p>Rauthhütte<br />Temperatur: 11,7°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w9).addTo(markerGroup).bindPopup("<p>Rosshütte Windstation<br />Temperatur: 4,1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rosshuette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w10).addTo(markerGroup).bindPopup("<p>Seegrube<br />Temperatur: 3,1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png'>aktuelles Wetter</a>").openPopup();
L.marker(w11).addTo(markerGroup).bindPopup("<p>Dalfazkamm<br />Temperatur: 0,4°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w12).addTo(markerGroup).bindPopup("<p>Erfurterhütte<br />Temperatur: 2,4°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w13).addTo(markerGroup).bindPopup("<p>Agetwoad<br />Temperatur: 1,5°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/agetwoad.png'>aktuelles Wetter</a>").openPopup();
L.marker(w14).addTo(markerGroup).bindPopup("<p>Breiter Grieskogel Schneestation<br />Temperatur: 1,1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png'>aktuelles Wetter</a>").openPopup();
L.marker(w15).addTo(markerGroup).bindPopup("<p>Breiter Grieskogel Windstation<br />Temperatur: -3,4°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png'>aktuelles Wetter</a>").openPopup();
L.marker(w16).addTo(markerGroup).bindPopup("<p>Falkaunsalpe<br />Temperatur: 2,2°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png'>aktuelles Wetter</a>").openPopup();
L.marker(w17).addTo(markerGroup).bindPopup("<p>Franz-Senn-Hütte Horntaler Spitzl<br />Temperatur: 4,3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w18).addTo(markerGroup).bindPopup("<p>Franz-Senn-Hütte Horntal<br />Temperatur: 5,5°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png'>aktuelles Wetter</a>").openPopup();
L.marker(w19).addTo(markerGroup).bindPopup("<p>Lampsenspitze Schneestation<br />Temperatur: 1,7°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png'>aktuelles Wetter</a>").openPopup();
L.marker(w20).addTo(markerGroup).bindPopup("<p>Lampsenspitze Windstation<br />Temperatur: -0,8°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png'>aktuelles Wetter</a>").openPopup();
L.marker(w21).addTo(markerGroup).bindPopup("<p>Roter Schrofen<br />Temperatur: -1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png'>aktuelles Wetter</a>").openPopup();
L.marker(w22).addTo(markerGroup).bindPopup("<p>Schlicker Alm<br />Temperatur: 6,5°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/schlickeralm.png'>aktuelles Wetter</a>").openPopup();
L.marker(w23).addTo(markerGroup).bindPopup("<p>Seirlöcher Kogel<br />Temperatur: 0°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seirloecherkogel.png'>aktuelles Wetter</a>").openPopup();
L.marker(w24).addTo(markerGroup).bindPopup("<p>Lämmerbichlalm<br />Temperatur: 3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png'>aktuelles Wetter</a>").openPopup();
L.marker(w25).addTo(markerGroup).bindPopup("<p>Rastkogel Windstation<br />Temperatur: 0,1°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png'>aktuelles Wetter</a>").openPopup();
L.marker(w26).addTo(markerGroup).bindPopup("<p>Sonntagsköpfl<br />Temperatur: 1,2°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png'>aktuelles Wetter</a>").openPopup();
L.marker(w27).addTo(markerGroup).bindPopup("<p>Sonntagsköpfl Windstation<br />Temperatur: 3,3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png'>aktuelles Wetter</a>").openPopup();
L.marker(w28).addTo(markerGroup).bindPopup("<p>Tuxerjoch Schneestation<br />Temperatur: 6°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png'>aktuelles Wetter</a>").openPopup();
L.marker(w29).addTo(markerGroup).bindPopup("<p>Tuxerjoch Windstation<br />Temperatur: 1,5°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png'>aktuelles Wetter</a>").openPopup();
L.marker(w30).addTo(markerGroup).bindPopup("<p>Wandspitze Schneestation<br />Temperatur: 1,3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png'>aktuelles Wetter</a>").openPopup();
L.marker(w31).addTo(markerGroup).bindPopup("<p>Wandspitze Windstation<br />Temperatur: -0,3°C<br />Datum: 26.04.2018<br /></p><a href='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png'>aktuelles Wetter</a>").openPopup();


myMap.fitBounds(markerGroup.getBounds());