;(function () {

	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
	});

  $('[data-fancybox]').fancybox({
    padding: 0,
    margin: 40,
    closeClick	: false,
  	openEffect	: 'elastic',
  	closeEffect	: 'elastic',
    openOpacity : false,
    closeOpacity : false,
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.7)'
            }
        }
    }
  });

})();