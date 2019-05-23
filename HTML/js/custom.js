// animation start code
new WOW().init();

// Custom click event code for footer submenu
/*     $('.footer-links h6').after().click(function() {
         $(this).parent('.menu-link').toggleClass('active');

     });*/

// Fund detail section inetaction code
function balancedfund() {
    $('.balanced-fund-wrap.col-8 .section-top-content p').addClass('font-18');
    var ww1 = $('.balanced-fund-wrap.col-8 .fund-detail-section').width();
    var tt1 = $('.balanced-fund-wrap.col-8 .fund-detail-section').parents(".container").width();
    var gap1 = tt1 - ww1;
    var nw1 = tt1 - 0 + 'px';
    console.log(tt1);


    $('.balanced-fund-wrap.col-8 .fund-detail-section').width(nw1);
    var ff = $('.balanced-fund-wrap.col-8 .fund-detail-section').width();
    var blwd = $(".balanced-fund-wrap.col-8").width();
    var nwd = tt1 - blwd;
    console.log(blwd);
    var nwd1 = nwd - 30 + 'px';
    var mleft = "-" + nwd1;
    //$('.balanced-fund-wrap.col-md-9 .fund-detail-section').css('margin-left', mleft);

}


$(".balanced-fund-content a").click(function () {
    $(this).parents('.crypto-fund-bg').find('.row1').removeClass('activesection');

    $(this).parents('.crypto-fund-bg').find('.row2').addClass('activesection');
    $(".crypto_fund_wrap").removeClass("col-8").removeClass("active").addClass("col-4 fadeInUp activecol").addClass("fund_hide");

    $(".balanced-fund-wrap").addClass("col-8 ").addClass("active");
    $(".balanced-fund-wrap").removeClass("col-4");

    if ($(".balanced-fund-wrap").hasClass('active')) {

        setTimeout(balancedfund(), 2000);
    }

});




$(window).on("load resize", function (e) {
    balancedfund();
});


$(".crypto-trigger").click(function () {
    $(this).parents('.crypto-fund-bg').find('.row2').removeClass('activesection');
    $(this).parents('.crypto-fund-bg').find('.row1').addClass('activesection');
    $(".crypto_fund_wrap").removeClass("fund_hide");
    $(".balanced-fund-wrap ").removeClass("col-8").removeClass("active").addClass("fadeInUp col-4").addClass("fund_hide");
    $('.balanced-fund-wrap .section-top-content p').removeClass('font-18');

    $(".crypto_fund_wrap").addClass("fadeInUp col-8").addClass("active");
    $(".crypto_fund_wrap").removeClass("col-4 fadeInUp activecol");



});

$(window).on("load resize", function () {
    var fh = $('.fund-detail-section').height();
    var hh = $('.crypto_fund').height();
    var newhh = fh + hh + 200;
    $('.crypto-fund-bg .container').height(newhh);
    var cnewh = $('.crypto-fund-bg .container').height();

    var ww = $('.fund-detail-section').width();

    var tt = $('.fund-detail-section').parents(".container").width();
    var gap = tt - ww;
    var nw = tt - 0 + 'px';

    $('.fund-detail-section').width(nw);



});

//////////////


 $("#newsletter-input").keypress(function(){
       $(".submit button").fadeIn("300");
});



/// smooth scroll
var headerHeight = $(".header").height() - 30;
$(".mouse-icon").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - headerHeight
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
      //  window.location.hash = hash;
      });
    } // End if
  });



// Scroll  Bar
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".navbar").addClass("bg-white");
    } else {
        $(".navbar").removeClass("bg-white");
    }
});


//

$('.closemsg').click(function(){
    $(this).parents('section').find('.newsletter-content').css('opacity',1);
    $(this).parent('.newsletter-subs').removeClass('d-flex').addClass('d-none');

});



$('#myModal .close').click(function(){
    $("#myModal form").validate().resetForm();
    $("#myModal label.error").remove();
    $("#myModal input").removeAttr('value');

    $("#myModal input").val("");
                         $("#myModal input.validate").removeClass('error valid');
                         $("#myModal input.validate").removeAttr('aria-required');
                         $("#myModal input.validate").removeAttr('aria-invalid');
                         $("#myModal label").removeClass('active');
});

////

//$(window).load(function() {
//var whh =  $(window).height();
//      $('.home-banner').height(whh);
//
//});

function setHeight() {
    windowHeight = $(window).innerHeight();
    if ($(window).width() < 768) {

        $('.home-banner').css('min-height', windowHeight);
    }

  };
   setHeight();
  $(window).resize(function() {
    setHeight();
  });

//$('input[autofill="off"]').disableAutofill();
 //   $(':input').live('focus',function(){
     //   $(this).attr('autocomplete', 'off');
   // });




// footer links dropdown
//
//$('.footerlinks-dropdown').click(function(){
//    $(this).parents('.menu-link').find('ul').slideToggle();
//})
