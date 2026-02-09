# 🛒 Gerenciador de Catálogo de Produtos (React + Node.js)

Sistema para gerenciamento de produtos, permitindo cadastro, visualização e exclusão de itens através de uma interface React integrada a uma API Node.js.

<img src="/assets/image.png" alt="alt text" style="width: 60%;"> 

---
## 🚀 Tecnologias

### Frontend
* **React + Vite**
* **CSS3** para estilização personalizada.
* **Fetch API** para consumo da API.

### Backend
* **Node.js + Express**
* **CORS** para integração entre domínios.
* **Arquitetura modular** (Controllers e Routes).

### Testes (Em Desenvolvimento): 
* Implementação de testes unitários com **Jest** para garantir a confiabilidade das funções e prevenir bugs no fluxo da aplicação.

---
## 🔗 Endpoints da API

A comunicação entre o frontend e o backend é feita através dos seguintes endpoints:

| Método | Endpoint | Função |
| :--- | :--- | :--- |
| **GET** | `/produtos` | Retorna a lista atual de produtos. |
| **POST** | `/produtos/add` | Registra um novo produto no sistema. |
| **DELETE** | `/produto/delete/:id` | Remove permanentemente um produto pelo ID. |

---
## 🛠️ Estrutura do Projeto

```text
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── productController.js  # Lógica de negócio
│   │   ├── data/
│   │   │   └── products.js           # Mock de dados (Array)
│   │   ├── app.js                    # Configuração do Express
│   │   ├── routes.js                 # Definição dos endpoints
│   │   └── server.js                 # Inicialização do servidor
│
├── frontend/
│   ├── src/
│   │   ├── components/               # Componentes React e seus estilos
│   │   │   ├── ProductForm.jsx / .css
│   │   │   ├── ProductList.jsx / .css
│   │   │   └── ProductPopup.jsx / .css
│   │   ├── App.jsx / .css            # Componente principal
│   │   └── main.jsx                  # Ponto de entrada
│   └── index.html
````
---
##🔮 Próximos Passos
**Persistência de Dados: Implementação de uma camada de banco de dados SQL para substituir o armazenamento em memória e garantir que os dados sejam preservados.

**Refinamento de Testes: Expansão da cobertura de testes com Jest para incluir componentes do frontend.

---
## 👨‍💻 Autor

Desenvolvido por **Elias Nery Lima**  
📍 Atibaia - SP  
💼 Desenvolvedor Full Stack
