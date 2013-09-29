var request = require("request");
var cheerio = require("cheerio");


var url = 'http://downloads.vagrantup.com' 


function get_tags(url) {
        request(url, function(err, resp, body) {
           if (err)
             throw err; 
           $ = cheerio.load(body);
           $('a.tag' ).each(function(tag) {
              console.log($(this).text());
           }); 
        }); 

};

get_tags(url); 
