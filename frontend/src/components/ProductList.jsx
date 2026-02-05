import React from 'react'
import { useState, useEffect } from 'react';
import './ProductList.css'

const ProductList = ({lista}) => {

    return (
        <div className="product-list">
            <h2>Lista de Produtos</h2>
            <ul>
                {lista.map((prod) => (
                    <li key={prod.id}>
                        <span className="product-name">{prod.nome}</span>
                        <span className="product-price">R$ {prod.preco}</span>
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default ProductList;