var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
/* GET users listing. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM subscription ORDER BY id desc',function(err,rows)     {
    res.send(rows);
  });
});


/* POST users subscription. */
router.post('/subscription', function(req, res) {

   connection.query('INSERT INTO subscription SET ?', req.body, function(err, result) {
      //if(err) throw err
      if (err) {
          // render to views/user/add.ejs
          res.send({
            error: 'ERROR',
            message: 'Error in create new subscription'                 
          })
      } else { 
        res.send({
          success: 'SUCCESS',
          message: 'create new subscription',
          result              
        })             
      }
  })

});

module.exports = router;
