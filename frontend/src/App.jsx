import { useEffect, useState } from "react"

import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"
import ProductPopup from "./components/ProductPopup"

import "./App.css"

function App() {

  const [ produtos, setProdutos ] = useState([])
  const [produtoSelecionado, setProduto] = useState(null)
  const [modalAberto, setModalAberto] = useState(false)
    
     useEffect(() => {
        att_lista()
    }, [])


    const selecionaProduto = (produto) => {
      setProduto(produto)
      setModalAberto(true)
    }

    const fecharModal = () => {
      setModalAberto(false)
      setProduto(null)
    }

    const att_lista = async () => {
        const res = await fetch('http://localhost:5050/produtos', {
        method: 'GET',
    })

    const data = await res.json()

    setProdutos(data.produtos)}

    const produtoCriado = () => {
      att_lista()
    }
  

  return (
    <div className="app-container">
    <ProductForm onProduto={produtoCriado}/>
    <ProductList lista={produtos} produto={selecionaProduto}/>
    <ProductPopup aberto={modalAberto} produto={produtoSelecionado} onClose={fecharModal}/>
    </div>
  )

}

export default App



