document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    // Check if productContainer exists
    if (!productContainer) {
        console.error("Product container not found");
        return;
    }

    const subcategoryId = '670e380dc60cda2d281a7982';

    // Fetch products by subcategory
    fetch(`http://localhost:5000/api/product/subcategory/${subcategoryId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then((products) => {
            if (!products || products.length === 0) {
                productContainer.innerHTML = '<p>No products found for this subcategory.</p>';
                return;
            }

            products.forEach((product) => {
                const colDiv = document.createElement('div');
                colDiv.className = 'col-12 col-md-6 col-lg-3 c-col';

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card fi-shoe-c';
                cardDiv.onclick = () => openpage(`shoesSpec.html?_id=${product._id}`); // Define the click action

                const img = document.createElement('img');
                img.src = `http://localhost:5000/${product.images[0]}`; // Adjust this according to your data structure
                img.alt = product.productName;

                const badge = document.createElement('span');
                badge.className = 'badge';
                if (product.discountPrice) {
                    const discount = Math.round((product.originalPrice - product.discountPrice) / product.originalPrice * 100);
                    badge.textContent = `-${discount}%`;
                }

                const cardInfo = document.createElement('div');
                cardInfo.className = 'card-info';
                cardInfo.innerHTML = `
                    <p>Men/Women</p>
                    <p>${product.productName}</p>
                    <p>₹${product.discountPrice ? product.discountPrice : product.originalPrice} .00- <span>₹${product.originalPrice}.00</span></p>
                `;

                cardDiv.appendChild(img);
                cardDiv.appendChild(badge);
                cardDiv.appendChild(cardInfo);
                colDiv.appendChild(cardDiv);
                productContainer.appendChild(colDiv);
            });
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            productContainer.innerHTML = '<p>Failed to load products.</p>';
        });
});
