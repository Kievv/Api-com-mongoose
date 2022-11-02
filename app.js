const express = require("express");
const mongoose = require("mongoose");

const contatosRouter = require("./routes/contatosRouter.js");

const url =
  "mongodb+srv://iev:mesquita@cluster0.ghlzmyj.mongodb.net/mongoose-aula-03?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.use(contatosRouter);

mongoose
  .connect(url)
  .then(
    app.listen(3000, () => {
      console.log("API esta ON na porta 3000");
    })
  )
  .catch((error) => {
    console.log("Deu merda: " + error);
  });
