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
      url: 'https://api.adalo.com/v0/apps/0e2f9406-7e4a-49ca-a3ba-b02c8fdc2171/collections/t_dj1khjd1yukhvtlk3hpy66mki',
      headers: {
        'Authorization': 'Bearer 2f92nu25htsudwlv7eabutps3',
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