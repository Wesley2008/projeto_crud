import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App(){

    const[btnCadastrar] = useState(true);
    const[produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setProdutos(retorno_convertido))
    },[]);

    return(
        <div>
            <p>{JSON.stringify(produtos)}</p>
            <Formulario botao={btnCadastrar}/>
            <Tabela/>
        </div>
    )
}