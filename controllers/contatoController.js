const { ObjectId } = require("bson");
const Contato = require("../models/contatoModel.js");

class ContatoController {
  static async criarContato(req, res) {
    const contato = new Contato(req.body);
    await contato
      .save()
      .then((doc) => {
        console.log(doc);
        return res.status(201).end();
      })
      .catch((error) => {
        const msgErro = {};
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
      });
  }

  static async listarContatos(req, res) {
    await Contato.find({})
      .then((contatos) => {
        return res.status(200).json(contatos);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  static async consultarPeloId(req, res) {
    await Contato.findOne({
      _id: ObjectId(req.params.id),
    })
      .then((contato) => {
        if (contato) return res.json(contato);
        else return res.status(404).json("Contato não localizado.");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  static async atualizarContato(req, res) {
    await Contato.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body, {
      runValidators: true,
    })
      .then((contato) => {
        if (contato) return res.status(204).end();
        else return res.status(404).json("Contato não localizado");
      })
      .catch((error) => {
        const msgErro = {};
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
      });
  }

  static async removerContato(req, res) {
    await Contato.findOneAndDelete({ _id: ObjectId(req.params.id) })
      .then((contato) => {
        if (contato) return res.status(204).end();
        else return res.status(404).json("Contato não localizado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = ContatoController;
