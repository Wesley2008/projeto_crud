function Formulario({botao}){
    return(
        <form>
            <h1>Formulário</h1>
            <input className="form-control" type="text" placeholder="Nome"></input>
            <input className="form-control" type="text" placeholder="Marca"></input>
            {
                botao
                ?
                <input className="btn btn-sucess" type="Button" value="Cadastrar"></input>
                :
                <div>
                    <input className="form-control" type="text" placeholder="Nome"></input>
                    <input className="form-control" type="text" placeholder="Marca"></input>
                    <input className="btn btn-danger"  type="button" value="Remover" />
                </div>
            }
        </form>
    )
}

export default Formulario;