function main() {
    
    const editBtn = document.querySelectorAll("#btn-edit")
    const deleteBtn = document.querySelectorAll("#btn-delete")
    const newProductForm = document.querySelector("#product-form")

    if (!editBtn || !deleteBtn || !newProductForm) return null
    
    newProductForm.addEventListener("submit", async () => {
        // event.preventDefault()

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
}

document.addEventListener("DOMContentLoaded", main)