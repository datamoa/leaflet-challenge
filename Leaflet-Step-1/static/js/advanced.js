// //Store query URL
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// // //Perfom a GET request to the query URL
// d3.json(queryUrl, function (data) {
//     //Once response succeeded send the data.features object to the createFeatures function
//     createFeatures(data.features);
//     console.log(data)

//     // //Loop through the earthquake object 
//     // for (var i = 0; i < data.length; i++) {
//     //   var color ="";
//     //   if (data[i].mag > 5) {
//     //       color ="red";
//     //   }
//     //   else if(data[i].mag > 4) {
//     //     color ="orange";
//     //   }
//     //   else if(data[i].mag > 3) {
//     //     color ="green";
//     //   }
//     //   else if(data[i].mag > 2) {
//     //     color ="blue";
//     //   }
//     //   else if(data[i].points > 1) {
//     //     color ="yellow";
//     //   }
//     //   else {
//     //     color ="lime"
//     //   }
       
//     // } 
// });

// function createFeatures(earthquakeData) {
//     //Define a function we want to run once for each feature in the features array
//     //Give each features a popup describing the place and time of the earthquake
//     function onEachFeature (feature, layer) {
//     //     layer.bindPopup("<h3>"+ feature.properties.place + "</h3><hr><p>"+ new Date(feature.properties.time + "</p>"));
//     }
//     //Create a GeoJSON layer containing the features array on the earthquakeData object
//    // Run the onEachFeature function once for each piece of data in the array
//     var earthquakes = L.geoJSON(earthquakeData,{
//         onEachFeature: onEachFeature
//     })
//     for (var i = 0; i < earthquakeData.length; i++) {
//         L.circle(earthquakeData[i].geometry.coordinates, {
//           fillOpacity: 0.75,
//           color: "white",
//           fillColor: "purple",
//           // Setting our circle's radius equal to the output of our markerSize function
//           // This will make our marker's size proportionate to its population
//           radius: 15 //markerSize(cities[i].population)
//         })
//       }
      
//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
//     console.log(earthquakes)
// }   
// function createMap(earthquakes){

//     // Define variables for greayscale tile layers
//     var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.light",
//         accessToken: API_KEY
//     });

//     // Define variables for satellite tile layers
//     var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
//     maxZoom: 18,
//     id: "mapbox.satellite", //mapbox.dark bsan 
//     accessToken: API_KEY
//     });

//     // Only one base layer can be shown at a time
//     var baseMaps = {
//         Light: light,
//         Satellite: satellite 
//     };

//     // Crete overlay object to hold overlay layer
//     var overlayMaps = {
//         Earthquakes: earthquakes
//     };
  
//     //create map object and set default layers
//     var myMap = L.map("map", {
//         center: [37.09, -95.71],
//         zoom: 5,
//         layers: [light, earthquakes]
//     });  

//     //Pass our map layers into layer control
//     //Add the layer control to the map
//     // L.control.layers(baseMaps).addTo(myMap);
//     L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(myMap);
// }


//Store query URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// //Perfom a GET request to the query URL
d3.json(queryUrl, function (data) {
    createMap(data.features);

    // //Loop through the earthquake object 
    // for (var i = 0; i < data.length; i++) {
    //   var color ="";
    //   if (data[i].mag > 5) {
    //       color ="red";
    //   }
    //   else if(data[i].mag > 4) {
    //     color ="orange";
    //   }
    //   else if(data[i].mag > 3) {
    //     color ="green";
    //   }
    //   else if(data[i].mag > 2) {
    //     color ="blue";
    //   }
    //   else if(data[i].points > 1) {
    //     color ="yellow";
    //   }
    //   else {
    //     color ="lime"
    //   }
    //
    // }
});

function createMap(data) {

    // console.log(data);

    // Define variables for greayscale tile layers
    var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
    });

    // Define variables for satellite tile layers
    var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18,
        id: "mapbox.satellite", //mapbox.dark bsan
        accessToken: API_KEY
    });

    // Only one base layer can be shown at a time
    var baseMaps = {
        Light: light,
        Satellite: satellite
    };

    //create map object and set default layers
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [light]
    });


    // ******************************************************************
    // Use this method to find radius, pass your current earthquake object
    // ******************************************************************
    function getCircleSize(earthquake) {
        var circleSize = earthquake.properties.mag * 30000
        // console.log(circleSize)
        return circleSize;
    }

    // ******************************************************************
    // Use this method to determine the color, pass your current earthquake object
    // ******************************************************************
    function getCircleColor(earthquake) {
        var color = ""
            if (earthquake.properties.mag > 5) {
                    color ="#FF0000";
                }
                else if(earthquake.properties.mag > 4) {
                    color ="#FF4500";
                }
                else if(earthquake.properties.mag > 3) {
                    color ="#FFA500";
                }
                else if(earthquake.properties.mag > 2) {
                    color ="#FFD700";
                }
                else if(earthquake.properties.mag > 1) {
                    color ="#F0E68C";
                }
                else {
                    color ="#ADFF2F"
                } 
        return color;
    }

    function getLocation(earthquake) {
        var obj = [earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]];
        return obj;
    }

    // Loop through the cities array and create one marker for each city object
    for (var i = 0; i < data.length; i++) {
        L.circle(getLocation(data[i]), {
            fillOpacity: 0.8,
            color: getCircleColor(data[i]),
            fillColor: getCircleColor(data[i]),
            radius: getCircleSize(data[i])
            // }).bindPopup("<h3>" + data.properties.place + "</h3><hr><p>" + new Date(data.properties.time + "</p>")).addTo(myMap)
        }).bindPopup("<h3>TEST</h3>").addTo(myMap)
    }
}