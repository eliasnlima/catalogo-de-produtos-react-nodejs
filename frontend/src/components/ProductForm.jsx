import React from "react";
import { useState } from "react";

const ProductForm = () => {

    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()

    const cadastrar = async (e) => {
        e.preventDefault()

        const produto = {
            nome: nome,
            preco: Number(preco),
        }

        const res = await fetch('http://localhost:5050/produtos/add', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify((produto))
        }       
        )
  
        setNome("")
        setPreco("")
    }

    return (
        <div className="container">
            <h1>Cadastro de Produto</h1>
            <form onSubmit={cadastrar}>
                <input type="text" placeholder="Insira o nome do produto" value={nome} onChange={(e) => setNome(e.target.value)}/><br/>
                <input type="number" placeholder="Insira o valor do produto" value={preco} onChange={(e) => setPreco(e.target.value)}/><br/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default ProductForm;