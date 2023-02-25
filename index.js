const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
var currentAddress;
var updatedAddress;
app.post("/current-address", async (req, res) => {
  // await req.body
  // console.log(req.body);
  // console.log(currentAddress);
  currentAddress = req.body;
  console.log(currentAddress);
  res.status(200).end();
  //    return res.json()
});
app.post("/update-address", (req, res) => {
  updatedAddress = req.body;
  console.log(updatedAddress.lng,updatedAddress.lat)
  if(updatedAddress.lng !==0  && updatedAddress.lat !==0 && updatedAddress.email !== '' && updatedAddress.lng!==null && updatedAddress.lat!==null && updatedAddress.email!==null ){
    var axios = require('axios');
    var data = JSON.stringify({
      "Name": "",
      "Email": updatedAddress.email,
      "Lng": updatedAddress.lng,
      "Lat": updatedAddress.lat
    });
    var config = {
      method: 'post',
      url: 'https://api.adalo.com/v0/apps/b70b372b-9814-425e-92e3-aae6a2a76b03/collections/t_3gke7k3bd2xm6de8hylmyd9eu',
      headers: {
        'Authorization': 'Bearer 5d2fcvsop5ql5im9lr0qw3pql',
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    console.log(updatedAddress);
    res.status(200).end();
  });
app.listen(8080);