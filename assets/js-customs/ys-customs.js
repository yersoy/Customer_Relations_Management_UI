$(document).ready(function(){
    $.fn.ysAnimateRotate = function(angle, start, duration, easing, complete) {
        return this.each(function() {
          var $elem = $(this);
          $({deg: start}).animate({deg: angle}, {
            duration: duration,
            easing: easing,
            step: function(now) {
              $elem.css({
                 transform: 'rotate(' + now + 'deg)'
               });
            },
            complete: complete || $.noop
          });
        });
      };
});