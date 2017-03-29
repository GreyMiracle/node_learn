var http = require('http');
var url = require('url');

function start(route,handle) {
    function onRequest(request, response) {

        var pathname=url.parse(request.url).pathname;
        console.log('request for '+pathname+' received');

        route(pathname,handle);

        response.writeHead(200, {
            'ContentType': 'text/plain'
        });
        response.end('此次响应已成功')
    }

    http.createServer(onRequest).listen(8080);
    console.log('http://127.0.0.1:8080/')
}

exports.start=start;


/*var http = require('http');
var url = require('url');

function start() {
    function onRequest(request, response) {
        var pathname=url.parse(request.url).pathname;
        console.log(pathname);
        response.writeHead(200);
        response.end('请求成功请再接再厉')
    }
    http.createServer(onRequest).listen(8888);
    console.log('http://localhost:8888/')
}

exports.start=start;*/