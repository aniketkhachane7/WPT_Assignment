const express = require("express");

const app = express();
const mysql = require("mysql2");
app.use(express.static("sf"));
let dbparams = {
  host: "localhost",
  user: "aniket",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};

const con = mysql.createConnection(dbparams);

app.get("/pincode", (req, resp) => {
  let pincode1 = req.query.pincode;
  console.log(pincode1);
  let details = { status: false, cityname: {} };
  con.query(
    "select city from citytable where pincode=?",
    [pincode1],
    (error, cityRow) => {
      if (error) {
        console.log("Error occur " + error);
      } else if (cityRow.length > 0) {
        details.status = true;
        details.cityname = cityRow[0];
      }
      resp.send(details);

      console.log("search");
    }
  );
  console.log(details.cityname.city);
});
app.listen(900, function () {
  console.log("Server connect tomport 900");
});
