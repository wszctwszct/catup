const express = require('express');
const mysql = require('mysql');
const database = 'nodemysql';

//create connection
/*const db = mysql.createConnection({
    host            : 'xxx',
    user            : 'root',
    password        : 'xxx',
    database        :  database
});
db.connect((err)=>{
    if (err) {
        if(err.toString().indexOf('Unknown database') !== -1){
            let sql = `CREATE DATABASE ${database}`;
            const connect = mysql.createConnection({
                host            : 'xxx',
                user            : 'root',
                password        : 'xxx',
            });
            connect.query(sql,(err, result)=>{
                if(err) throw err;
                console.log(result);
                console.log('database created...')
            })
        }
    }
    console.log('mysql connected...')
});*/
//create pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'xxx',
    user: 'root',
    password: 'xxx',
    database: database
});
pool.getConnection(function (err, connection) {
    // create table
    //const sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    const selectSQL = 'SELECT title FROM posts';
    const insertSQL = 'INSERT INTO posts SET ?';
    const data = {title: 'post one', body: 'this is post one'};
    const updateSQL = 'UPDATE posts SET title = 123 WHERE id = 1'
    connection.query(selectSQL, function (error, results, fields) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
        console.log(results);
    });
});

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/build'));

app.listen('8080', () => {
    console.log('Server started on port 8080')
});
app.all('/',(req,res)=>{
    res.sendFile(__dirname+'/build/index.html');
});
app.all('/db', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send(req.body);
});