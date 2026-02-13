jest.mock('../ProductForm.css',() => (({})))

import {fireEvent, render, screen, waitFor} from "@testing-library/react"
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

    test("Deve executar a função de submit", async () => {

        const mockOnProduto = jest.fn()

        global.fetch = jest.fn(() => 
            Promise.resolve({
                 json: () => Promise.resolve({})
            })
        )

        render(<ProductForm onProduto={mockOnProduto} />)

        const nome = screen.getByPlaceholderText("Insira o nome do produto")
        const preco = screen.getByPlaceholderText("Insira o valor do produto")
        const btn = screen.getByRole("button", {name: /Cadastrar/i})

        fireEvent.change(nome, {target: {value: 'Computador'}})
        fireEvent.change(preco, {target: {value: '15000'}})
        fireEvent.click(btn)

        await waitFor(() => {
            expect(mockOnProduto).toHaveBeenCalled()
        })
        
        expect(global.fetch).toHaveBeenCalled()

        expect(nome).toHaveValue("")
        expect(preco).toHaveValue(null)
        
    })
}) 