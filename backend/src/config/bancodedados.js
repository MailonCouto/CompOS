const mongoose = require ('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/compos')

mongoose.Error.messages.Number.max = "O '{VALUE}' informado e menor que o limite maximo '{MAX}'."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado e menor que o limite minimo '{MIN}'."   
mongoose.Error.messages.String.enum = "'{VALUE} Não é valido para o atributo '{PATH}'."