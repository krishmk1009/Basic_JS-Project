const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/bmi',(req,res)=>{
  res.sendFile(path.join(__dirname + '/bmi.html'))
})
app.post('/',(req,res)=>{
  
  let var1 = Number(req.body.num1);
  let var2 = Number(req.body.num2);
  let result = var1+var2
  res.send("the calculation is " + result)
})

app.post('/bmi-calc' , (req,res)=>{
  const weight = parseFloat(req.body.weight)
  const height = parseFloat(req.body.height)

  const bmi = weight/height*height
  res.send("bmi is "+ bmi)

})

app.listen(port, ()=>{
  console.log("app is listening on port 3000");
})
