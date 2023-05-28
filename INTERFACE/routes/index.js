var express = require('express');
var router = express.Router();
var ap = require('../config/env.js')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(ap.APIaccesspoint+"/emd")
  .then(resp =>{
      res.render('index', { exames:resp.data });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});

router.get('/emd/:id', function(req, res, next) {
  axios.get(ap.APIaccesspoint+"/emd/"+req.params.id)
  .then(resp =>{
      res.render('exam', { exam:resp.data });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});

module.exports = router;
