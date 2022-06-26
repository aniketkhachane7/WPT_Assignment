const url=""
let paramters=
{
    host :'localhost',
user :'root',
database : 'aniket',
password :'cdac',
port : 3306
};

const mysql =require("mysql2");
const connection=mysql.createConnection(paramters);
console.log("work okkk ");

let resourcename ="marketing"

connection.query('update resource set resourcename=?',[resourcename],
(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res.affectedRows);
    }

}



);
