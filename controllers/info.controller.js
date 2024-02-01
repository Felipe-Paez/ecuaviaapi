
const { registerInfo, getAllInfoByPlaca,removeOneInfoById } = require("../services/info.service")

const create = async (req, res) => {
  const inputData = req.body
  console.log(inputData)
  try {
    const data = await registerInfo( inputData )
    res.json({
        ok: true,
        data
    })
  } catch (error) {
    console.error( error )
    res.json({
        ok: false,
        msg: "error al registrar informacion"
    })
  }
}

const getAllByPlaca = async (req, res) => {
    const placa = req.params.placa
    try {
        console.log(placa)
        const data = await getAllInfoByPlaca(placa)
        console.log(data)
        res.json({
            data
        })
    } catch (error) {
        
    }
}

const removeById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await removeOneInfoById(id)
        res.json({ 
            ok:true
         })
    }
    catch(error){
    
    }

}



module.exports = {removeById,getAllByPlaca,create}