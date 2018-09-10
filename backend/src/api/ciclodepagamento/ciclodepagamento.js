const restful = require ('node-restful')
const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o Nome do Crédito'] },
    value: { type: Number, min: 0, required: [true, 'Informe o Valor do Crédito']}
})

const debitoSchema = new mongoose.Schema ({
    name: { type: String, required: [true, 'Informe o Nome do Débito']},
    value: {type: Number, min: 0, required: [true, 'Informe o Valor do Débito']},
    status: { type: String, required: false, uppercase: true, 
            enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const ciclodepagamentoSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o Nome ']},
    mes: {type: Number, min: 1, max: 12, required: [true, 'Informe o Mes ']},
    ano: {type: Number, min: 1900, max: 2100, required: [true, 'Informe o Ano ']},
    creditos:[creditoSchema], 
    debitos:[debitoSchema]
})

module.exports = restful.model('ciclodepagamento', ciclodepagamentoSchema)
