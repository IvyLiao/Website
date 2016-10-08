$(function () {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('#stickyheader').css({
                position: 'fixed',
                top: '0px'
            });
            $('#othercontent').css('margin-top', $('#stickyheader').outerHeight(true) + parseInt($('#unstickyheader').css('marginBottom')));
        } else {
            $('#stickyheader').css({
                position: 'static',
                top: '0px'
            });
            $('#othercontent').css('margin-top', '0px');
        }
    });
});

$(document).ready(function() {

      // Initialize the plugin
      $('#TA').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });
    
    $('#GD').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });
    
    $('#WD').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });
    
      
    $('#SB').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });
    
     $('#VD').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });
    
     $('#PD').popup({
            color: 'white',
          opacity: 0.98,
          transition: '0.3s',
          scrolllock: true
      
      });

    });

