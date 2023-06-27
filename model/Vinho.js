const mongoose = require("mongoose")

const VinhoSchema = new mongoose.Schema({
    nome: String,
    produtor: String,
    ano: Number
})
const VinhoModel = mongoose.model("Vinho", VinhoSchema)

module.exports = {
    list: async function () {
        const vinhos = await VinhoModel.find({}).lean()
        return vinhos
    },

    save: async function (nome, produtor, ano) {
        const vinho = new VinhoModel({
            nome: nome,
            produtor: produtor,
            ano: ano
        })
        await vinho.save()
        return vinho
    },

    update: async function (id, obj) {
        //Devolve o objeto antigo
        //return await BookModel.findByIdAndUpdate(id, {$set: obj}) 

        let vinho = await VinhoModel.findById(id)
        if (!vinho) {
            return false
        }

        Object.keys(obj).forEach(key => vinho[key] = obj[key])
        await vinho.save()
        return vinho
    },

    delete: async function (id) {
        return await VinhoModel.findByIdAndDelete(id)
    },

    getById: async function (id) {
        return await VinhoModel.findById(id).lean()
    }
}