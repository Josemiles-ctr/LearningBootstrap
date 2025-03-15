
import express from "express";
import cors from 'cors'
const app = express();
app.use(cors())
app.get('/', (req, res) => {
  res.render('../lo')
})
app.listen(8080,(err)=>{
  if(!err){
    console.log("Server running on http://localhost:8080");
  }
  else {
    console.log("Server Failure");
  }
});

