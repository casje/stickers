const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const stickers = `
[
  {
    "ident": "2131223",
    "title": "Angular",
    "image": "angular.png",
    "price": 2.50
  },
  {
    "ident": "7823782",
    "title": "Node JS",
    "image": "nodejs.png",
    "price": 2.50
  },
  {
    "ident": "9873264",
    "title": "DevOps",
    "image": "devops.png",
    "price": 3.10
  },
  {
    "ident": "9122398",
    "title": "Spring Framework",
    "image": "spring.png",
    "price": 2.90
  },
  {
    "ident": "2223432",
    "title": "Vue JS",
    "image": "vuejs.png",
    "price": 3.10
  },
  {
    "ident": "2113443",
    "title": "Visual Studio Code",
    "image": "vscode.png",
    "price": 3.25
  }
]
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  
  res.end(stickers);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
