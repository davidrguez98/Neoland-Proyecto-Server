async function loadProducts(req, res) {
    try {
        const response = fetch('/api/products', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            const container = document.querySelector("#container-products.list")
            container.innerHTML += `
            <div class="product-card">
                <div class="product-info">
                    <h3 class="product-name"><%= product.name %></h3>
                    <div class="product-details">
                        <span class="product-price">Precio: $<%= product.price %></span>
                        <span class="product-quantity">Cantidad: <%= product.quantity %></span>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-edit" onclick="editProduct('<%= product.id %>')">
                        Editar
                    </button>
                    <button class="btn btn-delete" onclick="deleteProduct('<%= product.id %>')">
                        Eliminar
                    </button>
                </div>
            </div>
            `
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

function main() {
    
    document.addEventListener("DOMContentLoaded", (event) => {
        event.preventDefault()

        
    })
}

document.addEventListener("DOMContentLoaded", main)