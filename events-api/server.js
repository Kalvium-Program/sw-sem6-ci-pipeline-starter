const http = require('node:http');
const { events } = require('./events');

const port = Number(process.env.PORT || 3000);

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/events') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(events));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
}).listen(port, '0.0.0.0', () => console.log(`Campus Events app listening on ${port}`));
