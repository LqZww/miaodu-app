var express = require('express') //引入express模块
var app = express() //调用express方法
var cors = require('cors')
app.use(cors())


// 操作MySQL开始
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'zhouwanwen',
	database: 'miaodu'
});

// connection.connect();
// var addbook = `insert into books
// 					(bookname,author)
// 				values
// 					('','')`;
// connection.query(addbook, function(error, results, fields) {
// 	if (error) return 0;
// 	console.log(results)
// });
// 操作MySQL结束


// 发布图书
app.get('/admin/pub', function(req, res) {
	console.log(req.query);
	var d = req.query;
	var addbook =
		`insert into books
		 (bookname,author,bookimg,titone,tittwo,title,words,info,progress)
		  values
		   ('${d.bookname}','${d.author}','${d.bookimg}','${d.titone}','${d.tittwo}','${d.title}','${d.words}','${d.info}','${d.progress}')`;
	// var addbook = `insert into books (bookname) values ('${d.bookname}')`
	connection.query(addbook, function(error, results, fields) {
		if (error) return 0;
		console.log(results)
	});
	res.end()
})

// 加载图书列表
app.get('/admin/list',function(req,res){
	var list = `select * from books`;
	connection.query(list, function (error, results, fields) {
	  if (error) return 0;
	  var ldata = JSON.parse(JSON.stringify(results))
	  console.log(ldata)
	  res.send(ldata);
	  res.end();
	});
})

// app.get('/footprint',function(req,res){ //3,挂载接口
// 	var fuser = `select * from books`;
// 	connection.query(fuser, function(error, results, fields) 
// 	if(error) return 0;
// 	fpdata.list=JSON.parse(JSON.stringify(results))
// 	console.log(fpdata.list)
// 	res.send(fdata)
// 	res.end()
// })

// var fdata = require('./data/fpdata.js')
// app.get('/footprint', function(req, res) {
// 	res.send(fdata)
// 	res.end()
// })
// var bdata = require('./data/bkdata.js')
// app.get('/book', function(req, res) {
// 	res.send(bdata)
// 	res.end()
// })
// var ddata = require('./data/dtdata.js')
// app.get('/detail', function(req, res) {
// 	res.send(ddata)
// 	res.end()
// })
// var rdata = require('./data/rsdata.js')
// app.get('/readstory', function(req, res) {
// 	res.send(rdata)
// 	res.end()
// })
// var ldata = require('./data/listdata.js')
// app.get('/booklist', function(req, res) {
// 	res.send(ldata)
// 	res.end()
// })
// var readdata = require('./data/rdata.js')
// app.get('/read', function(req, res) {
// 	res.send(readdata)
// 	res.end()
// })

app.listen(8081)