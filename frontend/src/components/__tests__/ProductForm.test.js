jest.mock('../ProductForm.css',() => {({})})

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import ProductForm from "../ProductForm"

describe("ProductForm", () => {
    test("Deve exibir formulário", () => {

        render(<ProductForm onProduto={jest.fn()}/>)

        expect(screen.getByText("Cadastro de Produto")).toBeInTheDocument()
    })
}) 