var examModel = require('../models/emd')

module.exports.list = () => {
    return examModel.find({},{'_id':1,'nome':1,'dataEMD':1,'resultado':1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getExam = id => {
    return examModel.findOne({'_id':id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getModalidades = () => {
    return examModel.aggregate( [ { $group : { _id : "$modalidade" } } ] )
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getExamsModalidade = m => {
    return examModel.find({'modalidade':m})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getResultadosOK = () => {
    return examModel.find({'resultado':true})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getNomesF = sexo => {
    return examModel.find({'género':sexo},{'nome':1}).sort({'nome':1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getNomesClube = x => {
    return examModel.find({'clube':x},{'nome':1}).sort({'nome':1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}