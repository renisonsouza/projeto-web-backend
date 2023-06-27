const mongoose = require("mongoose");
require('dotenv').config();

module.exports = (req, res, next) => {
    const dbURL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    mongoose.connect(dbURL)
        .then(() => {
            console.log("Conexão com o banco de dados estabelecida com sucesso");
            next();
        })
        .catch((err) => {
            console.log("Erro ao conectar no banco de dados:", err);
            next(err);
        });
};
