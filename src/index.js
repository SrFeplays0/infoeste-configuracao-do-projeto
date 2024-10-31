import  express  from "express";
import usuarioRoute from './routes/usuarioRoute.js'
const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRoute)

app.listen(5000, () =>{
    console.log('Servidor rodando na porta 5000');
})