var mysql = require('mysql');
var http = require('http');
var querystring = require('querystring');

// 连接本机数据库
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '123456',
	port : '3306',
	database : 'bilibili'
});

connection.connect();
// 创建服务器连接
var server = http.createServer( function(req, res){
	// 定义头部解决汉字编码问题
	res.setHeader('Content-Type','text/plain;charset=utf-8');
	// 解决本地跨域问题
	res.setHeader('Access-Control-Allow-Origin','*');
	if(req.url == '/shop'){
		let sql = 'select * from shop limit 50';
		connection.query(sql, (err,result) =>{
						if(err){
							console.log('[INSERT ERROR] - ',err.message);
							return;
						}
						 res.end(JSON.stringify(result));
					});
	}else if(req.url == '/fanju'){
		let sql = 'select * from fanju limit 50';
		connection.query(sql, (err,result) =>{
						if(err){
							console.log('[INSERT ERROR] - ',err.message);
							return;
						}
						 res.end(JSON.stringify(result));
					});
	}else if(req.url == '/china'){
		let sql = 'select * from china limit 50';
		connection.query(sql, (err,result) =>{
						if(err){
							console.log('[INSERT ERROR] - ',err.message);
							return;
						}
						 res.end(JSON.stringify(result));
					});
	}else if(req.url == '/like'){
		let str = '';
		req.on('data',(data)=>{
			str += data;
		});
		req.on('end',()=>{
			let sea = JSON.parse(str);
			let sql = 'select * from shop where itemsId= '+sea.art_id;
			connection.query(sql, (err, result)=>{
				if(err){
					console.log(err.message);
				}
				let like = result[0].like + 1;
				let update = "UPDATE `shop` SET `like` = "+like+", `isLike` = '1' WHERE `itemsId` = "+sea.art_id;
				connection.query(update, (err, results)=>{
					if(err){
						console.log(err.message);
					}
				})	
			})
		})
	}else if(req.url == '/cancel'){
			let str = '';
			req.on('data',(data)=>{
				str += data;
			});
			req.on('end',()=>{
				let sea = JSON.parse(str);
				let sql = 'select * from shop where itemsId= '+sea.art_id;
				connection.query(sql, (err, result)=>{
					if(err){
						console.log(err.message);
					}
					let like = result[0].like - 1;
					let update = "UPDATE `shop` SET `like` = "+like+", `isLike` = '0' WHERE `itemsId` = "+sea.art_id;
					connection.query(update, (err, results)=>{
						if(err){
							console.log(err.message);
						}
					})	
				})
			})
	}else if( req.url =='/page'){
		let str = '';
		req.on('data',(data)=>{
			str += data;
		});
		req.on('end',()=>{
			let sea = JSON.parse(str);
			let page = sea.index;
			let sql = 'select * from shop limit '+page+', 1';
			connection.query(sql, (err, result)=>{
				if(err){
					console.log(err.message);
				}
				res.end(JSON.stringify(result));
			})	
		});
	}else if(req.url =='/detail'){
		let str = '';
		req.on('data',(data)=>{
			str += data;
		});
		req.on('end',()=>{
			let sea = JSON.parse(str);
			let itemsId = sea.index;
			let sql = 'select * from shopinfo where itemsId = '+itemsId;
			connection.query(sql, (err, result)=>{
				if(err){
					console.log(err.message);
				}
				let banner = result[0].banner;
				banner = banner.split(',');
				let desImg = result[0].desImg;
				desImg = desImg.split(',');
				let attrList = result[0].attrList.split(',');
				let attr = [];
				for(let i=0,j=0;i <attrList.length; i=i+2,j++){
					attr[j] = attrList[i]+' : '+attrList[i+1];
				}
				let ret = [];
				ret = [banner,desImg,attr,result[0]];
				res.end(JSON.stringify(ret));
			})	
		});
	}else if(req.url =='/search'){
		let str = '';
		req.on('data',(data)=>{
			str += data;
		})
		req.on('end',()=>{
			let sea = JSON.parse(str);
			let s = /\s/g;
			let qu = s.test(sea.item);
			let sql = 'select * from shop where name like "%'+sea.item+'%" limit 30';
			if(!qu)
			connection.query(sql,(err,result)=>{
				if(err){
					console.log(err.message);
				}
				res.end(JSON.stringify(result));
			})
			else{
				let empty=[];
				res.end(JSON.stringify(empty));
			}
		})
	}
	else{
		console.log('访问错误');
		res.end('');
	}
});

server.listen(8081, '192.168.1.103');
console.log('listening on port  8081');