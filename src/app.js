var mysql = require('mysql');
var express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log("сервер запущен "+PORT);
});

// var connection = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : '',
//   database:  'wp_new',
//   port: "3306"
// });

// connection.connect(err => {
//     if(err){
//         console.log(err);
//         return err;
//     }else{
//         console.log('ok');
//     }
// });

// function getQur(callback){
//     let query = "SELECT posts_title, posts_text, posts_img FROM my_posts";
//     connection.query(query, 
//         (err, result, field) => {
//             // console.log(result);
//             callback(result);
//     });
// }


// app.get("/api", (req, res)=>{
//     getQur((drive)=>{ 
//         res.json({posts_data: drive});
//         // console.log(drive);
//         // connection.end();
//      });
// });

app.get('/',(req,res) => {
    res.send("This is a sample express app")
})