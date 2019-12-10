const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const result = `
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
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
