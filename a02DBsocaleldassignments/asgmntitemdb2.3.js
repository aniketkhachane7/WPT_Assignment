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


let itemno ='2';  //assume this came from http request


connection.query('select itemname,price from item where itemno=?', [itemno], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        // if(rows.length>0){
        //     console.log(rows.itemno);}
        if(rows.length>0)
        console.log(rows[0].itemname+" "+rows[0].price);
        }    
       
    

);