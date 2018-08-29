window.fbAsyncInit = function() {
    FB.init({
      appId            : '219911925347660',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.1'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$('.open-messenger').on('click', function(){
    FB.CustomerChat.showDialog();
})

// Facebook Payments
$('.lightarian-rays-client-payment').on('click', function(){
    FB.ui(
        {
        method: 'pay',
        action: 'purchaseiap',
        product_id: 'com.fb.lightarian_rays_client',
        developer_payload: 'think_for_yourself_og_payment_request_lightarian_rays_client'
        },
        response => (console.log(response)) // Callback function
    );
})
$('.lightarian-clearing-client-payment').on('click', function(){
    FB.ui(
        {
        method: 'pay',
        action: 'purchaseiap',
        product_id: 'com.fb.lightarian_clearing_client',
        developer_payload: 'think_for_yourself_og_payment_request_lightarian_clearing_client'
        },
        response => (console.log(response)) // Callback function
    );
})
