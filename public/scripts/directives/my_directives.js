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

directives.directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});
