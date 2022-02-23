const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'hrmsdb'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to DB");
});

app.get("/", (req, res) => {
    res.send("Homepage")
});

app.get("/viewApplications", (req, res) => {
    fetchApplications(res);
});

function fetchApplications(res) {
    var query = "SELECT * FROM applications";
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
}

app.get("/viewVoucher", (req, res) => {
    fetchVoucher(res);
});

function fetchVoucher(res) {
    var query = "SELECT * FROM reimbursementvoucher";
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
}

app.post("/api/submit", (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let contact = req.body.contact;
    let dob = req.body.dob;
    let email = req.body.email;
    let prevexp = req.body.prevexp;
    let qual = req.body.qual;
    let resume = req.body.resume;
    let interviewdatetime = req.body.interviewdatetime;
    let status = req.body.status;
    let interviewerID = req.body.interviewerID;

    var applicationDataInsert = "INSERT INTO applications (firstName, lastName, emailID, phoneNumber, dateOfBirth, prevExperience, Qualifications, resumeUpload, interviewDateTime, status, interviewerID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    con.query(applicationDataInsert, [firstName, lastName, email, contact, dob, prevexp, qual, resume, interviewdatetime, status, interviewerID], (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows);
    })
});

app.post("/api/submit", (req, res) => {
    let voucherCategory = req.body.voucherCategory;
    let amount = req.body.amount;
    let appliedDate = req.body.appliedDate;
    let reason = req.body.reason;
    let status = req.body.status;
    let proof = req.body.proof;

    var voucherDataInsert = "INSERT INTO reimbursementVoucher (voucherCategory, amount, appliedDate, reason, status, proof) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(voucherDataInsert, [voucherCategory, amount, appliedDate, reason, status, proof], (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows);
    })
});

app.listen('3001', () => {
    console.log("Server Running on port 3001");
})