const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "Nome é obrigatório"],
      trim: true,
      minLength: [3, "O nome deve conter pelo menos 3 caracteres"],
    },
    fone: {
      type: String,
      required: [true, "Telefone é obrigatório"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contato", contatoSchema);
