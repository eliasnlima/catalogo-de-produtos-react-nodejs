import React from 'react'
import { useState, useEffect } from 'react';

const ProductList = () => {

    const [ lista, setLista ] = useState([])
    
     useEffect(() => {
        att_lista()
    }, [])


    const att_lista = async () => {
        const res = await fetch('http://localhost:5050/produtos', {
        method: 'GET',
    })

    const data = await res.json()

    setLista(data.produtos)


    }

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {lista.map((prod) => (
                    <li key={prod.id}>{prod.nome} - {prod.preco}</li>
                    ))}
            </ul>
        </div>
    )
}

export default ProductList;