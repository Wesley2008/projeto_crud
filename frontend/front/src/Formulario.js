import "./Formulario.css";

function Formulario() {
    return (
        <form className="formulario">
            <h1>Formulário</h1>

            <div className="inputs">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Marca" />
            </div>

            <div className="botoes">
                <button type="button">Cadastrar</button>
                <button type="button">Alterar</button>
                <button type="button">Remover</button>
                <button type="button">Cancelar</button>
            </div>
        </form>
    );
}

export default Formulario;
