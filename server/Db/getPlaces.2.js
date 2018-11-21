// var mongoose = require('../libs/mongoose');
var async = require('async');

function getPlaces() {
    // Return new promise 
    return new Promise(function(resolve, reject) {
        // Do async job
        //    request.get(options, function(err, resp, body) {
        //        if (err) {
        //            reject(err);
        //        } else {
        //            resolve(JSON.parse(body));
        //        }
        //    })

        async.series([
            // open,
            // requireModels,
            getPLACES,
        ], function(err, results) {
            if (err) {
                console.log("error in series");
                reject(err);
                return
            }
            var PLACES = results[1];
            resolve(PLACES);
        });

    })
}
// open connection
function open(callback) {
    mongoose.connection.on('open', callback);
}
// getPLACES:
// show all users
// get as parametr incoming callback and execute it after completed
function getPLACES(callback) {

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
    async.forEachOf(PLACEStoCreate, function(place, key, callback) {

        const continent = place.country;
        const cities = place.places;

        const placeJSON = [];
        // save one place with all that webcams
        async.each(cities, function(item, callback) {
            // let's read one webcam
            const itemJSON = {};
            itemJSON["city"] = item.city;
            itemJSON["src"] = item.src;
            itemJSON["zip"] = item.zip;
            itemJSON["time_zone"] = item.time_zone;
            // let's push webcam data that we read to the placeJSON array
            placeJSON.push(itemJSON);
            callback();

        }, function(err) {
            if (err) return callback(err);
            // let's push placeJSON to PLACES JSON object
            // PLACES.splice(key, 0, placeJSON);
            localPLACES[continent] = placeJSON;
            // this callback for forEachOf places
            callback();
        });
    }, function(err) {
        if (err) console.error(err.message);
        // let's run next function in async.series
        callback(null, localPLACES);
    });
}
module.exports = getPlaces;