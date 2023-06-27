const express = require("express")
const router = express.Router()

const {success, fail} = require("../helpers/resposta")
const VinhoDAO = require("../model/Vinho")

router.get("/", (req, res) => {
    VinhoDAO.list().then((vinho) => {
        res.json(success(vinho, "vinhos"))
    })
})

router.get("/:id", (req, res) => {
    VinhoDAO.getById(req.params.id).then(vinho => {
        res.json(sucess(vinho))
    }).catch(err => {
        console.log(err)
        res.status(500).json(fail("Não foi possível localizar o vinho"))
    })
})

router.post("/", (req, res) => {
    const {nome, ano, produtor} = req.body

    VinhoDAO.save(nome, ano, produtor).then(vinho => {
        res.json(sucess(vinho))
    }).catch(err => {
        console.log(err)
        res.status(500).json(fail("Falha ao salvar o novo vinho"))
    })
})

router.put("/:id", (req, res) => {
    const {id} = req.params
    const {nome, ano, produtor} = req.body

    //TODO validar os campos
    let obj = {}
    if (nome) obj.nome = nome
    if (produtor) obj.autor = produtor
    if (ano) obj.ano = ano

    if (obj == {}) {
        return res.status(500).json(fail("Nenhum atributo foi modificado"))
    }

    VinhoDAO.update(id, obj).then(vinho => {
        if (vinho)
            res.json(sucess(vinho))
        else
            res.status(500).json(fail("vinho não encontrado"))
    }).catch(err => {
        console.log(err)
        res.status(500).json(fail("Falha ao alterar o vinho"))
    })
})

router.delete("/:id", (req, res) => {
    VinhoDAO.delete(req.params.id).then(vinho => {
        if (vinho)
            res.json(sucess(vinho))
        else
            res.status(500).json(fail("vinho não encontrado"))
    }).catch(err => {
        console.log(err)
        res.status(500).json(fail("Falha ao excluir o vinho"))
    })
})

module.exports = router