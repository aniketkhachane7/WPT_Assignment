const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'aniket',
    database: 'node',
	port:3306
}; // change port to 3306 that may be the port mostly.
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("work okkk");


let itemno ='100';  //assume this came from http request
  
let price ='200';  //assume this came from http request
let category ='For signature';

connection.query('update item set category=?,price=? where itemno=?', [category,price,itemno], 
(err, res1) => {
    if (err) {
        console.log(err);  
    }  else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);