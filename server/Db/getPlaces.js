// var mongoose = require('../libs/mongoose');
var async = require('async');

async function getPlaces() {
    var PLACES = await getPLACES();
    return PLACES;
}
// getPLACES:
// show all users
// get as parametr incoming callback and execute it after completed
function getPLACES() {
    return new Promise(resolve => {
        //webcames array with city name and src to youtube live
        const PLACEStoCreate = {};
        PLACEStoCreate["Европа"] = [
            { city: "Saint-Malo-Le Port", src: "https://www.youtube.com/embed/fQ8pFCrVGzE", zip: "Saint-Malo", time_zone: "Europe/Berlin" },
            { city: "Baden-Baden", src: "https://www.youtube.com/embed/KiKuzd-ioRw", zip: "Baden-Baden", time_zone: "Europe/Berlin" },
            //{city:"Venice", src:"https://www.youtube.com/embed/YiiNSrDuECw", zip: "Venezia", time_zone:"Europe/Madrid"}
            { city: "Venice", src: "https://www.youtube.com/embed/vPbQcM4k1Ys", zip: "Moscow", time_zone: "Europe/Madrid" },
            { city: "Oslo", src: "https://www.youtube.com/embed/DhPYnvZmFQA", zip: "Oslo", time_zone: "Europe/Madrid" }
        ];
        PLACEStoCreate["Азия"] = [
            { city: "Koh Samui", src: "https://www.youtube.com/embed/y5hjoAZGf_E", zip: "Ko Samui", time_zone: "Asia/Saigon" },
            { city: "Tokyo", src: "https://www.youtube.com/embed/JYBpu1OyP0c", zip: "Tokyo", time_zone: "Asia/Tokyo" },
            { city: "Tokyo", src: "https://www.youtube.com/embed/nKMuBisZsZI", zip: "Tokyo", time_zone: "Asia/Tokyo" },
            { city: "Earth", src: "https://www.youtube.com/embed/qyEzsAy4qeU", zip: "Kiev", time_zone: "Europe/Kiev" }
        ];
        PLACEStoCreate["Америка"] = [
            { city: "New York", src: "https://www.youtube.com/embed/la90mA4VLa4", zip: "New York", time_zone: "America/New_York" },
            { city: "Banff", src: "https://www.youtube.com/embed/2UX83tXoZoU", zip: "Banff", time_zone: "Canada/Central" },
            { city: "Tucson", src: "https://www.youtube.com/embed/nmoQp7gyzIk", zip: "Tucson", time_zone: "America/Fort_Nelson" },
            { city: "Mexico City", src: "https://www.youtube.com/embed/jHD8XrAYAyk", zip: "Mexico City", time_zone: "America/Mexico_City" }
        ];
        PLACEStoCreate["Африка"] = [
            { city: "Cape Town", src: "https://www.youtube.com/embed/Ki-d5f5_WwU", zip: "Cape Town", time_zone: "Africa/Cairo" },
            { city: "Melbourne", src: "https://www.youtube.com/embed/FZ72I6o6Z9k", zip: "Melbourne", time_zone: "Australia/Melbourne" },
            { city: "Animals", src: "https://www.youtube.com/embed/TW19E-C8nJ8", zip: "Cape Town", zip: "Cape Town" },
            { city: "Animals", src: "https://www.youtube.com/embed/Kay9czw22ew", zip: "Cape Town", zip: "Cape Town" }
        ];


        var localPLACES = {};
        localPLACES = PLACEStoCreate;
        resolve(localPLACES);
    });
}
module.exports = getPlaces;