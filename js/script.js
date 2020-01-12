document.addEventListener('DOMContentLoaded', function () {
   
    let doc = document,
        shoe = doc.querySelector('.shoe'),
        shoeLightning = doc.querySelector('.lightning'),
        shoeShadow = doc.querySelector('.shoe__shadow');

    shoe.addEventListener('mouseover', function () {
         console.log('mouseover');
        shoe.style.top = '-50px';
        shoeLightning.style.top = '-150px';
        shoeShadow.style.width='90%';
    });
    shoe.addEventListener('mouseleave', function () {
         console.log('mouseleave');
        shoe.style.top = '0px';
        shoeLightning.style.top = '-100px';
        shoeShadow.style.width='100%';
    });
});
