// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object for Los Angeles, California with a center and zoom level 0-18.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California. Radius measured in meters.
//Option A - let marker = L.marker([34.0522, -118.2437]).addTo(map);
//Option B - L.circle([34.0522, -118.2437], {
    //radius: 100
 //}).addTo(map);

//Option C - to create a marker on a  map. Don't forget camelCase in code.
L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
 }).addTo(map);

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// We create the tile layer that will be the background of our map - DARK Version.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{    
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);