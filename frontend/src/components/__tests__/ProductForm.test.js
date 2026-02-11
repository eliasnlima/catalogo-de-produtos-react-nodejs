jest.mock('../ProductForm.css',() => {({})})

import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/user-event"
import ProductForm from "../ProductForm"

describe("ProductForm", () => {
    test("Deve renderizar formulário", () => {

        render(<ProductForm onProduto={jest.fn()}/>)

        expect(screen.getByText("Cadastro de Produto")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Insira o nome do produto")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Insira o valor do produto")).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument()
    })

    test("Deve salvar os dados escritos nos inputs", () => {
        render(<ProductForm onProduto={jest.fn()} />)

        const nome = screen.getByPlaceholderText("Insira o nome do produto")
        const preco = screen.getByPlaceholderText("Insira o valor do produto")

        fireEvent.change(nome, {target: {value: 'Computador'}})
        fireEvent.change(preco, {target: { value: '1200'}})

        expect(nome).toHaveValue('Computador')
        expect(preco).toHaveValue(1200)

    })
}) 