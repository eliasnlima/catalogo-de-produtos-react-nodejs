import React from "react";
import './ProductPopup.css'

const ProductPopup = ({aberto, produto, onClose, onExcluir}) => {
    if (!aberto || !produto) return null

    return (
        <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <h3>{produto.nome}</h3>
        <p>Preço: R$ {produto.preco}</p>
        <button onClick={onExcluir}>Excluir</button>
      </div>
    </div>
    )
}

export default ProductPopup;