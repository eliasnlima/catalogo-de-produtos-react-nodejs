jest.mock("../ProductList.css", () => ({}))

import { render } from "@testing-library/react"
import { screen } from "@testing-library/dom"
import ProductList from "../ProductList"

describe("Product List", () => {
    test("Deve exibir titulo", () => {

        const lista = [
            {
                id: 1,
                nome: "Tablet",
                preco: "800"
            }
        ]

        const produto = jest.fn()

        render(<ProductList lista={lista} produto={produto}/>)

        const titulo = screen.getByText("Lista de Produtos")

        expect(titulo).toBeInTheDocument()

    })
}) 