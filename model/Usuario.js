const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const UsuarioModel = require('../models/Usuario');

module.exports = {
  getByEmail: async function (email) {
    return await UsuarioModel.findOne({ email });
  },

  save: async function (nome, usuario, email, senha) {
    const usuario = new UsuarioModel({
      nome,
      usuario,
      email,
      senha,
    });
    await usuario.save();
    return usuario;
  },

  getById: async function (id) {
    return await UsuarioModel.findById(id).lean();
  },

  delete: async function (id) {
    return await UsuarioModel.findByIdAndDelete(id);
  },
};


module.exports = UsuarioModel;
