function main() {
    
    const editBtn = document.querySelectorAll(".btn-edit")
    const deleteBtn = document.querySelectorAll(".btn-delete")
    const newProductForm = document.querySelector("#product-form")

    if (!editBtn || !deleteBtn || !newProductForm) return null
    
    newProductForm.addEventListener("submit", async () => {

        const name = document.querySelector("#new-name").value
        const price = document.querySelector("#new-price").value
        const quantity = document.querySelector("#new-quantity").value

        console.log(name, price, quantity)
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    price,
                    quantity
                })
            })

            if (response.ok) {
                newProductForm.reset()
            } else {
                alert('Error al crear el producto')
            }
        } catch (error) {
            console.log(error)
        }
    })

    deleteBtn.forEach(btn => {
        btn.addEventListener("click", async (event) => {
        
        const id = event.target.getAttribute('data-id')

        if(!id) return null

        if(confirm('¿Seguro que quieres eliminar el producto?')) {
            try {
                const response = await fetch(`/api/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json'
                    }
                })

                if (response.ok) {
                    alert('Producto eliminado correctamente.')
                    location.reload()
                }
            } catch (error) {
                console.log(error)
                alert('Error al eliminar el producto')
            }
        }
    })
    })
}

document.addEventListener("DOMContentLoaded", main)