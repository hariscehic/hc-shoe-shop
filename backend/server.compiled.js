const express = require('express');

var cors = require('cors');

const app = express();
const port = 8081;
const productsResponse = [{
  name: "sneakers 1",
  price: 200
}, {
  name: "sneakers 2",
  price: 170
}, {
  name: "sneakers 3",
  price: 145
}, {
  name: "sneakers 4",
  price: 50
}, {
  name: "sneakers 5",
  price: 215
}, {
  name: "sneakers 6",
  price: 142
}, {
  name: "sneakers 7",
  price: 320
}, {
  name: "sneakers 8",
  price: 160
}, {
  name: "sneakers 9",
  price: 255
}, {
  name: "sneakers 10",
  price: 65
}];
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/products', (req, res) => {
  res.send(productsResponse);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
