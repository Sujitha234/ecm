
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


