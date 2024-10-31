import UsuarioModel from "../model/usuarioModel.js";

export default class usuarioController{
    async criar(req, res){
        let {nome, email, idade} = req.body;

        if(nome && email && idade){
            let usuarioModel = new UsuarioModel("", nome, email, idade);
            let usuariocriar = await usuarioModel.criar();

            if(usuariocriar){
                res.status(200).json({
                    ok: true,
                    msg: "usuario cadastrado com sucesso!"
                })
            }else{
                res.status(404).json({
                    ok: false,
                    msg: "Usuario não encontrado",
                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: "parametros invalidos"
            })
        }

    }
}