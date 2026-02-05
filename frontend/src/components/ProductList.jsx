import React from 'react'
import { useState, useEffect } from 'react';

const ProductList = ({lista}) => {

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