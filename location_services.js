/**
 *
 * Location module to perform various location related functionality
 *
 */
var ERROR_ENUMS = require('./error_enums');

var location_services = function(){
    var scraper = require('images-scraper');
    this._bing = new scraper.Bing();

};

location_services.prototype.resolve_ip_address_to_location = function(ip){



};

/***
 * Adds a location as visited.
 */
location_services.prototype.add_visited_location = function (){

};

/**
 * Returns a list of locations that users have visited
 */
location_services.prototype.get_visited_locations = function () {
};

/**
 * Generates the url as a string which corresponds to an image for the city and country provide.
 * @param city The city to search for a picture.
 * @param country The country to search for a picture.
 * @param callback The function to call with the resultant image link.
 */
location_services.prototype.generate_image_link_for_location = function (city, country,callback) {
    if (city === undefined || country === undefined || callback == undefined || typeof(callback) !== 'function'){
        throw (new Error(ERROR_ENUMS.INVALID_PARAMETERS));
    }
    this._bing.list({
        keyword:city+','+country,
        num: 10,
        detail:true
    }).then(function(res){
        callback(res[Math.floor((Math.random()*10))].url);
    });
};

/***
 * Gets the router which may be mounted that will add the locations services module.
 * @param express Express app instance
 * @returns A router which may be mounted that will add the locations module to be added to the available web services.
 */
location_services.prototype.get_router = function(express){
    var router = express.Router();
    var that = this;
    router.get('/', function(req,res){
        var ip = req.ip;
        res.send('your ip is '+ip)
    });
    return router;
};

module.exports = location_services;



