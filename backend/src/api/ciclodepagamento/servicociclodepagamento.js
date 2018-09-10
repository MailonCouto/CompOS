const ciclodepagamento = require ('./ciclodepagamento')

ciclodepagamento.methods(['get', 'post', 'put', 'delete'])
ciclodepagamento.updateOptions({new: true, runValidators: true})

ciclodepagamento.route('count', (req, res, next) => {
    ciclodepagamento.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

ciclodepagamento.route('summary', (req, res, next) => {
    ciclodepagamento.aggregate({
        $project: {credito: {$sum: "$creditos.value"}, debitos: {$sum: "$debitos.value"}}
    }, {
        $group: {_id: null, credito: {$sum: "$credito"}, debito: {$sum: "$debito"}}
    }, {
        $project: {_id: 0, credito: 1, debito: 1    }
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json(result[0] || {credito: 0, debito: 0 })
        }
         
    })
})

module.exports = ciclodepagamento