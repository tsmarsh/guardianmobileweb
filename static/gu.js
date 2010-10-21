var api_key = 'tnug2qhxwphygdm5d7g99wb6';
var api_url = 'http://content.guardianapis.com/news?format=json&show-fields=all&api-key='+api_key+'&callback=?';

var get_summaries_for_section = function(section, callback) {
    $.getJSON(api_url, function(data) {
        callback(data.response.results);
    });
}