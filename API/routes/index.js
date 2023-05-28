var express = require('express');
var router = express.Router();
var Exame = require('../controllers/emd')

router.get('/api/emd', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  if(req.query.res=='OK' && req.query.res){
    Exame.getResultadosOK().then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção"})
    })
  }else if(req.query.modalidade){
    Exame.getExamsModalidade(req.query.modalidade).then(exames=>{
      res.jsonp(exames);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de exames"})
    })
  }else{
    Exame.list().then(exames=>{
      res.jsonp(exames);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de exames"})
    })
  }
});


router.get('/api/emd/:id',function(req,res,next){
  console.log("entrou - id")
  var data = new Date().toISOString().substring(0, 16)
  Exame.getExam(req.params.id).then(exam=>{
    res.jsonp(exam);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção do exame."})
  })
})

router.get('/api/modalidades',function(req,res,next){
  var data = new Date().toISOString().substring(0, 16)
  Exame.getModalidades().then(modalidades=>{
    res.jsonp(modalidades);
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção"})
  })
})

router.get('/api/atletas',function(req,res,next){
  if(req.query.gen=='F' && req.query.gen){
    var data = new Date().toISOString().substring(0, 16)
    if(req.query.gen && req.query.gen=="F"){
      Exame.getNomesF('F').then(nomes=>{
        res.jsonp(nomes);
      }).catch(error=>{
        res.render('Erro:',{erro: error,message:"Erro na obtenção"})
      })
  }
  }else if(req.query.clube){
    Exame.getNomesClube(req.query.clube).then(nomes=>{
      res.jsonp(nomes);
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção"})
    })
  }
})


module.exports = router;
