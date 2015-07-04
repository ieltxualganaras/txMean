var mongoose     = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema       = mongoose.Schema;

var UsuarioSchema = new Schema({
  nombre: String,
  usuario: {type : String, unique : true},
  rol: String,
  clave: String,
  activo: {type: Boolean, default: true},
  alta: {type: Date, default: Date.now},
  baja: {type: Date},
  ultimoAcceso : {type: Date}
});
UsuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Usuario", UsuarioSchema);
