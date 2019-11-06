const Register = require('../models/Register');

const insert = (req,res)=>{
    let register = new Register(req.body);
    register.save((err)=>{
        if(err) return res.status(500).json({
            message: 'Algo salió mal al tratar de insertar un Register'
        })
        res.status(200).json({
            message: 'Inserción de Register exitosa'
        })
    })
};

const update = (req.res)=>{
    let register = req.body

    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    Register.update({_id: register._id},register)
    .then(value=>{
        res.status(200).json({
            message: 'Operación de modificar exitosa'
        })

    .catch(err=>{
        res.status(500).json({
            message:'Algo salió mal en la operación modificar'
        })

    })    

    })

    
}

const deleteBYId = (req.res)=>{
    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    Register.deleteOne({_id: register._id},register)
    .then(value=>{
        res.status(200).json({
            message: 'Operación de eliminar exitosa'
        })
    })

    .catch(err=>{
        res.status(500).json({
            message:'Algo salió mal en la operación eliminar'
        })
    })
}

const getAll = (req.res)=>{
    Register.find((err,registers)=>{
        if(err) return res.status(500).json({
            message: 'Algo salió mal al seleccioanr todos'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else {
            res.status(404).json({
                message: 'NO hay ningún registro'
            })
        }
    })
}

const getOneById = (req,res)=>{
    let id = req.params._id

    Register.findById(id,(err.register)=>{
        if(err) return res.status(500).json({
            message: 'Algo salio mal al seleccionar uno'
        })
        if(register){
            res.status(200).json(register)
        }else{
            res.status(404).json({
                message: 'NO se encontro el registro solicitado'
            })
        }
    })
}




module.exports = {
    insert,
    update,
    deleteBYId,
    getAll,
    getOneById
}