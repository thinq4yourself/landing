window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-42099274-1');

$('.addToCartButton').on('click', function(){
    fbq('track', 'AddToCart');
})