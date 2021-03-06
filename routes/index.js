var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});

router.use('/mascotas', require('./mascotas'));

module.exports = router;
