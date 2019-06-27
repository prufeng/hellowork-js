var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    getTitles(res);
}).listen(3000, "127.0.0.1");

function getTitles(res) {
    fs.readFile('./titles.json', function (err, data) {
        if (err) return hadError(err, res);
        getTemplate(res, JSON.parse(data.toString()));
    });
}
function getTemplate(res, titles) {
    fs.readFile('./template.html', function (err, data) {
        if (err) return hadError(err, res);

        formatHtml(data.toString(), titles, res);
    });
}

function formatHtml(tmpl, titles, res) {
    var html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

function hadError(err, res) {
    console.error(err);
    res.end('Server Error');
}
