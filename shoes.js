
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let number = document.querySelector('#number');

let count = 0;

number.innerHTML = count;

increase.addEventListener('click',()=>{
    count++;
    number.innerHTML = count;

})

decrease.addEventListener('click',()=>{
    count--;

    if(count < 0){
        count = 0;
    }
    number.innerHTML = count;
})


ScrollReveal({
    reset :true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.section-1 ,.section-2,.para1,.para2,.r1,.scroll-img' ,{delay:5,origin:'bottom',});

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
            document.getElementById('prv-1').src = `http://localhost:5000/${data.images[0]}`;
            document.getElementById('prv-2').src = `http://localhost:5000/${data.images[1]}`;
            document.getElementById('prv-3').src = `http://localhost:5000/${data.images[2]}`;
            document.getElementById('prv-4').src = `http://localhost:5000/${data.images[3]}`;
            document.getElementById('product-name').innerText = data.productName;
            document.getElementById('product-price').innerText = `₹${data.price.toFixed(2)}`;
            document.getElementById('product-description').innerText = data.description;
            document.getElementById('product-info').innerText = data.description;
            document.getElementById('product-des').innerText = data.description;
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

