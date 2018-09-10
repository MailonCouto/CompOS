const express = require('express')

module.exports = function(server){
    // difinido rodas, tudo dentro de api passa por aqui!
    const rotas = express.Router()
    server.use('/api', rotas)

    // rotas de ciclo de pagamentos
    const ciclodepagamento = require('../api/ciclodepagamento/servicociclodepagamento')
    ciclodepagamento.register(rotas, '/ciclodepagamento')
}