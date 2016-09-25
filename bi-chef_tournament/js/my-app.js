/**
* @Author: lisnb
* @Date:   2016-09-25T18:36:19+08:00
* @Email:  lisnb.h@hotmail.com
* @Last modified by:   lisnb
* @Last modified time: 2016-09-25T22:18:24+08:00
*/



// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true,
    pushState: true,
});

// var mySwiper = myApp.swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

var month1week1liugallary = myApp.photoBrowser({
    photos : [
        'img/month1/week1/liu/1.JPG',
        'img/month1/week1/liu/2.JPG',
        'img/month1/week1/liu/3.JPG',
        'img/month1/week1/liu/4.JPG',
        'img/month1/week1/liu/5.JPG',
        'img/month1/week1/liu/6.JPG',
        'img/month1/week1/liu/7.JPG',
    ]
});
//Open photo browser on click
$$('#month1-week1-liu-gallary-trigger').on('click', function () {
    month1week1liugallary.open();
});
