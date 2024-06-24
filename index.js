

// const fs = require("fs");

// console.log("index.js")

//  const data = fs.readFileSync("Database.txt");
// const data2 = data.toString();

// console.log(data2);

// console.log(data2.length)

// let count =0;

// for(let i = 0; i < data2.length; i++){
     
//     // console.log(data2.charAt(i) );
//     if(data2.charAt(i) === "N" && i < (data2.length - 5)){
//           if(data2.charAt(i+1) == "a"){
//             if(data2.charAt(i+2)== "m"){
//                 if(data2.charAt(i+3)== "e"){
//                       count++;
//                 }
//             }
//           }
//     }

// }


// console.log('no of student is')
// console.log(count);
// const data3 = data2.include("Name");



//  console.log(data3)


custID = [{
 "id" : 1,
  "name" : "a"
 },
{
    "id" : 2,
    "name" : "b"
}
]



// 2) implement an Express.js route at '/api/customers/:customerId/profile' that handles HTTP PUT requests? 
// This route should enable updating a customer's profile information by providing JSON data in the request body.

const express = require("express");
const app = express();

app.use(express.json());

app.put("/api/customers/:customerId/profile" , (req, res)=>{

    const da = req.body;
    
     const ci =  req.params.customerId;
   let user = false;
      
    for(let i = 0; i < custID.length ; i++){
      if  (custID[i].id == ci ){
             user = true ;
      }
    }


    if (user == true){
        res.send({
            sucess : true,
            message : "user found"
        })
    }
    else {
        res.send({
            sucess : true,
            message : "user not found"
        })
    }

} )


app.listen(5000, ()=> {
    console.log("server is up")
})