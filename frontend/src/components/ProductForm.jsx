import React from "react";

const ProductForm = () => {

    return (
        <div className="container">
            <h1>Cadastro de Produto</h1>
            <form>
                <input type="text" placeholder="Insira o nome do produto" /><br/>
                <input type="number" placeholder="Insira o valor do produto"/><br/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default ProductForm;