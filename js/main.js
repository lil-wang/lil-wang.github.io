$(document).ready(function(){
   $('.log-in').css('color', '#FFFFFF');
   var scroll_start = 0;
   var carousel = $('#myCarousel');
   var offset = carousel.offset();
    if (carousel.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background', '#00a5f6');
          $('.navbar').fadeTo(500,0.9);
       } else {
          $('.navbar').css('background', 'transparent');
       }
   });
    }


    
});
