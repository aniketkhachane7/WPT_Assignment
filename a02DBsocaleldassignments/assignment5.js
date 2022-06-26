const express = require("express");
const app = express();

const mysql = require("mysql2");
app.use(express.static("sf"));

let dbparams = {
  host: "localhost",
  user: "aniket1",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
const con = mysql.createConnection(dbparams);

// ******************* Blur event ******************************
app.get("/emp", (req, resp) => {
  let empno1 = req.query.empno;

  console.log(empno1);

  let details = { status: false, emp: {} };
  con.query(
    "select empno,empname,sal from emp11 where empno=?",
    [empno1],
    (error, cityRow) => {
      //   console.log("error occured");
      if (error) {
        //when you dont have data why problem is there collect data first.
        console.log("Error aaa raha he be" + error);
      } else if (cityRow.length > 0) {
        details.status = true;
        details.emp.empno = cityRow[0].empno;
        details.emp.empname = cityRow[0].empname;
        details.emp.sal = cityRow[0].sal;
      }
      resp.send(details);

      // console.log("search");
      // console.log(cityRow);
    }
  );
});

// *************************************** ADD  and click event ***********************************

app.get("/Addemp", (req, resp) => {
  let empno1 = req.query.empno1;
  let empname1 = req.query.empname1;
  let sal1 = req.query.sal1;
  let details = { status: false, item: {} };
  console.log(empno1 + " " + empname1 + " " + sal1);

  con.query(
    "insert into emp11 values(?,?,?);",
    [empno1, empname1, sal1],
    (error, emprow) => {
      if (error) {
        console.log(" error here " + error);
      } else if (emprow.affectedRows > 0) {
        details.status = true;
        console.log("Added done");
      }
      resp.send(details);
    }
  );
});

app.listen(9000, function () {
  console.log("Server connect tomport 9000");
});

// *************** update click event *********************************

app.get("/empupdate", (req, resp) => {
  let empno2 = req.query.empno2;
  let empname2 = req.query.empname2;
  let sal2 = req.query.sal2;

  let details = { status: false, emp: {} };
  console.log(empno2 + " " + empname2 + " " + sal2);

  con.query(
    "update emp11 set empname=?,sal=? where empno=?",
    [empname2, sal2, empno2],
    (error, itemrow) => {
      if (error) {
        console.log("error here : " + error);
      } else if (itemrow.affectedRows > 0) {
        details.status = true;
        console.log("update successful");
      } else {
        console.log("update un_successful");
      }
      resp.send(details);
    }
  );
});
