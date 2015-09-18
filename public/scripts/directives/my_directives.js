directives.directive('anchorClick', function() {
   return function(scope, element, attrs) {
      $(element).click(function(event) {
         event.preventDefault();
         var target = this.hash;
         var $target = $(target);

         $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
         }, 600);
      });
   };
});
