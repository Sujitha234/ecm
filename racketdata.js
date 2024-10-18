document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    // Check if productContainer exists
    if (!productContainer) {
        console.error("Product container not found");
        return;
    }

    const subcategoryId = '670e380dc60cda2d281a7981';

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
                colDiv.className = 'swiper-slide';

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card bs-card';
                cardDiv.onclick = () => openpage(`productSpec.html?_id=${product._id}`); // Define the click action

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
                cardInfo.className = 'bs-card-info';
                const specs = product.specifications[0];
                cardInfo.innerHTML = `
                    <h3>${product.productName}</h3>
                    <p>₹${product.discountPrice ? product.discountPrice : product.originalPrice} .00- <span>₹${product.originalPrice}.00</span></p>
                    <p>${specs.weight}/${specs.material}/${specs.color}</p>
                    `;
                // Assuming there's only one specification object
                const specDetails = `
                    
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

//
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the product ID from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('_id');

    // Fetch product data from the backend
    fetch(`http://localhost:5000/api/product/${productId}`)
        .then(response => response.json())
        .then(data => {
            // Populate the HTML with product data
            console.log(data);
            document.getElementById('main-img').src = `http://localhost:5000/${data.images[0]}`;
            document.getElementById('prv-1').src = `http://localhost:5000/${data.images[1]}`;
            document.getElementById('prv-2').src = `http://localhost:5000/${data.images[2]}`;
            document.getElementById('prv-3').src = `http://localhost:5000/${data.images[3]}`;
            document.getElementById('prv-4').src = `http://localhost:5000/${data.images[4]}`;
            document.getElementById('prv-5').src = `http://localhost:5000/${data.images[1]}`;
            document.getElementById('prv-6').src = `http://localhost:5000/${data.images[0]}`;
            document.getElementById('prv-7').src = `http://localhost:5000/${data.images[3]}`;
            document.getElementById('product-name').innerText = data.productName;
            document.getElementById('product-fname').innerText = data.productName;
            document.getElementById('product-cprice').innerText = `₹${data.discountPrice.toFixed(2)}`;
            document.getElementById('product-cartprice').innerText = `₹${data.discountPrice.toFixed(2)}`;
            document.getElementById('final-cartprice').innerText = `₹${data.discountPrice.toFixed(2)}`;
            document.getElementById('product-oprice').innerText = `₹${data.originalPrice.toFixed(2)}`;
            if (data.discountPrice) {
                const discount = Math.round((data.originalPrice - data.discountPrice) / data.originalPrice * 100);
                document.getElementById('discount-per').innerText = `(${discount}%)`;
            }
            document.getElementById('product-description').innerText = data.description;
            //document.getElementById('product-info').innerText = data.description;
            // document.getElementById('product-des').innerText = data.description;
            //document.getElementById('product-code').innerText = data.code;
            //document.getElementById('customer-review').innerText = `(${data.reviews.length} Customer Reviews)`;

            // // Populate the stars
            // const starRating = document.getElementById('star-rating');
            // for (let i = 0; i < 5; i++) {
            //     const star = document.createElement('i');
            //     star.className = 'fa-solid fa-star';
            //     star.style.color = i < Math.round(data.averageRating) ? '#FBDE45' : '#ffeaa7';
            //     starRating.appendChild(star);
            // }

            // // Populate color options
            // const colorOptions = document.getElementById('color-options');
            // data.colors.forEach(color => {
            //     const colorSpan = document.createElement('span');
            //     colorSpan.className = `color-option ${color}`;
            //     colorOptions.appendChild(colorSpan);
            // });

            // // Populate size options
            // const sizeOptions = document.getElementById('size-options');
            // data.sizes.forEach(size => {
            //     const sizeSpan = document.createElement('span');
            //     sizeSpan.className = 'size-option ms-2';
            //     sizeSpan.innerText = size;
            //     sizeOptions.appendChild(sizeSpan);
            // });

            

            // Populate reviews
            // const reviewsContainer = document.getElementById('reviews-container');
            // data.reviews.forEach(review => {
            //     const reviewDiv = document.createElement('div');
            //     reviewDiv.className = 'row r1';
            //     reviewDiv.innerHTML = `
            //         <div>
            //             ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            //         </div>
            //         <p class="mt-2">${review.title}</p>
            //         <small class="text-secondary">${review.author} on ${new Date(review.date).toLocaleDateString()}</small>
            //         <p class="mt-2">${review.comment}</p>
            //         <p class="text-end report">Report as Inappropriate</p>
            //     `;
            //     reviewsContainer.appendChild(reviewDiv);
            // });
        })
        .catch(error => console.error('Error fetching product data:', error));
});