const http = require('http');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
    if(req.url === '/api/upload' && req.method.toLowerCase() === 'post') {

        const form = formidable({multiples: true, uploadDir: './upload'});

        form.parse(req, (err, fields, files) => {
            if(err) {
                res.writeHead(err.httpCode || 400, {'Content-Type': 'text/plain'});
                res.end(String(err));
                return;
            }

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({fields, files}, null, 2));
        });

        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <h2>Form Upload</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>File Name: <input type="text" name="title"></div>
        <div>Upload File: <input type="file" name="multipleFiles" multiple="multiple"></div>
        <input type="submit" value="Upload" />
    </form>
    `);
});


server.listen(8080, 'localhost', () => {
    console.log('listening on port 8080');
})