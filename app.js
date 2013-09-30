var argv = require("optimist")
   .boolean(['fetchtags'])
   .default('url', 'http://downloads.vagrantup.com')
   .default('file', 'checksums.json')
   .default('tag', 'v1.3.3')
   .default('tagpath', '/tags/') 
   .argv; 

var request = require("request");
var cheerio = require("cheerio");

function get_tags(url) {
        request(url, function(err, resp, body) {
           var t = [];
           if (err)
             throw err; 
           $ = cheerio.load(body);
           //console.log(body);
           $('a.tag').each(function(tag) {
              //console.log(tag);
              get_package_info(url + '/tags/', $(this).text());
              t.push($(this).text());
              //console.log(tags);
           });
           console.log(t);
        });
};

function get_package_info(url, tag){
        u = url + tag;
        console.log(u);
        request(url + tag, function(err, resp, body) {
        $ = cheerio.load(body); 
        console.log(body); 
        }); 

};

if (argv.fetchtags) { 
    get_tags(argv.url); 
} else
{
    get_package_info(argv.url + argv.tagpath , argv.tag);
}
