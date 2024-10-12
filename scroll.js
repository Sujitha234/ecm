// page nav temp
function openpage(pageURL)
{
    window.location.href = pageURL;
}

//scroll reavel
ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:1000,
    delay:300
});

ScrollReveal().reveal('.at-text,.coll-text,.sacc-text', { delay: 300 ,origin:'left'});
ScrollReveal().reveal('.atheletes-images div,.collection-list .coll-col,.bs-list .bs-col,.sacc-list .sacc-col', { delay: 500 ,origin:'bottom',interval: 200});
ScrollReveal().reveal('.text-content h2', { delay: 300 ,origin:'left',duration:1000});
ScrollReveal().reveal('.text-content p', { delay: 400 ,origin:'left',duration:1000});
ScrollReveal().reveal('.text-content a', { delay: 500 ,origin:'left',duration:1000});
ScrollReveal().reveal('.hg-img img', { delay: 500 ,origin:'right',duration:1000});
ScrollReveal().reveal('.hg2-img img', { delay: 500 ,origin:'left',duration:1000});
ScrollReveal().reveal('.hg2-text-content h2', { delay: 300 ,origin:'right',duration:1000});
ScrollReveal().reveal('.hg2-text-content p', { delay: 400 ,origin:'right',duration:1000});
ScrollReveal().reveal('.hg2-text-content .hg2-btn', { delay: 500 ,origin:'right',duration:1000});