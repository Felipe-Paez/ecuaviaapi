const InfoModel = require("../models/info")

async function getAllInfoByPlaca(placa) {
    return await InfoModel.find({placas:placa})
}

async function removeOneInfoById(id) {
    return await InfoModel.findOneAndRemove({ _id: id })
}

async function registerInfo(info) {
    return await InfoModel.create(info)
}

module.exports = {
    registerInfo,
    getAllInfoByPlaca,
    removeOneInfoById
}