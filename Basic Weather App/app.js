const express = require("express");
const app = express();
const https = require("https")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
// const path = require(Path);

app.get('/',(req,res)=>{

    res.sendFile(__dirname+"/index.html")

})
app.post('/',(req,res)=>{
    
    const query = req.body.cityName
const appKey= "23c3c09c3fd7a97eb372b226212e8eca"
const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&uint=fahrenheit&appid="+appKey
    https.get(url, (response)=>{
        // console.log(response);\

        response.on('data',(data)=>{
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(temp);
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);
            const icon = weatherData.weather[0].icon;
            // const icon ="04d";
            console.log(icon);
            const imgUrl =  "http://openweathermap.org/img/wn/" +icon +"@2x.png"
            res.write("<p>the current whether of "+query+" is </p> " + weatherDescription );
            res.write("<img src="+ imgUrl +">");
            res.write("<h1>the current temp of "+query+" is </h1>" + temp);
            res.send()
        })
    })
})

app.listen(5000,()=>{
    console.log("app is listening on port 3000")
})

