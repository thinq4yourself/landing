window.fbAsyncInit = function() {
    FB.init({
      appId            : '219911925347660',
      autoLogAppEvents : true,
      xfbml            : false,
      version          : 'v3.1'
    });
};

$('.open-messenger').on('click', function(){
    FB.CustomerChat.showDialog();
})

// Facebook Payments
$('.lightarian-rays-client-payment').on('click', function(){
    FB.ui(
        {
        method: 'pay',
        action: 'purchaseiap',
        product_id: 'lightarian_rays_client',
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
        product_id: 'lightarian_clearing_client',
        developer_payload: 'think_for_yourself_og_payment_request_lightarian_clearing_client'
        },
        response => (console.log(response)) // Callback function
    );
})
