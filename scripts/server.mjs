import http from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('../public/', import.meta.url)));
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer between 1 and 65535.');
  process.exit(1);
}
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8'
};
const insideRoot = file => file === root || file.startsWith(root + path.sep);
const server = http.createServer(async (req, res) => {
  const reply = (status, message) => {
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : message);
  };
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    return reply(405, 'Method Not Allowed');
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.includes('\0') || pathname.includes('\\')) throw new Error('Invalid path');
  } catch {
    return reply(400, 'Bad Request');
  }
  const segments = pathname.split('/').filter(Boolean);
  if (segments.some(segment => segment.startsWith('.'))) return reply(404, 'Not Found');
  let file = path.resolve(root, '.' + pathname);
  if (!insideRoot(file)) return reply(404, 'Not Found');
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    file = await realpath(file);
    if (!insideRoot(file)) return reply(404, 'Not Found');
    const content = await readFile(file);
    res.writeHead(200, {
      'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache'
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR', 'EISDIR', 'EACCES'].includes(error.code)) return reply(404, 'Not Found');
    console.error('Could not serve file:', error.code);
    reply(500, 'Internal Server Error');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is in use. Try PORT=${port + 1} npm start.`
    : `Server failed: ${error.message}`);
  process.exit(1);
});
server.listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port}`));
