
import express from "express";
import cors from 'cors'
import mysql from 'mysql2'
const app = express();
app.use(cors())
app.get('/about/people', (req, res) => {
  res.send("<h1>Hello world</h1>");
})
const  dbConnection=mysql.createConnection(
    {
      host:"localhost",
      user:"root",
      password:"1234Dadi$",
      database:"Company",
      multiselection : true,
    }
)
dbConnection.connect(err => {
  if(!err){
   console.log( "Connected to database succesfully.");
  }else {
    console.log("Connection Error: "+err);
  }
})
const qr="SELECT * FROM employee";
dbConnection.query(qr,(err,result)=>{
  if(err){
    console.log("Error occures"+err)
  }else {
 app.get('/employees',(req,res)=>{
   res.send(result);

 })
      // console.log((result));
  }

});

const PORT = 5000;
app.listen(PORT,(err)=>{
  if(!err){
    console.log(`Server running on http://localhost:${ PORT }`);
  }
  else {
    console.log("Server Failure");
  }
});

