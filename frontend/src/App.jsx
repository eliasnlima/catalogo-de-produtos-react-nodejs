import { useEffect, useState } from "react"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"
import "./App.css"

function App() {

  const [ produtos, setProdutos ] = useState([])
    
     useEffect(() => {
        att_lista()
    }, [])


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
    <ProductList lista={produtos}/>
    </div>
  )

}

export default App



