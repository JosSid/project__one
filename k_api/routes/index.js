var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/piso/:piso([0-9]+)/puerta/:puerta', (req, res, next) => {
  const direccion = req.params
  console.log(direccion)
  res.send('ok')
})

router.get('/en_query_string', (req, res, next) => {
  const orderBy = req.query.orderBy
  const numero = req.query.solo
  console.log(req.query)
  res.send(`${numero} ${orderBy}`)
})
module.exports = router;
