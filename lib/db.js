var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'34.68.251.231',
   user:'root',
   password:'jp7mK9jDk2yPjkII',
   database:'creditu'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 