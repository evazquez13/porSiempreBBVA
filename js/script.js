$(document).on( 'ready' , function() {
// alert('ok')
    $('#myCarousel').carousel({
		interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});

$('.navbar-default a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});
$('span').on('mouseenter' , function(){
	$(this).popover('show')
})
$('span').on('mouseleave' , function(){
	$(this).popover('hide')
})
$('.collapse')
		.on('shown.bs.collapse', function() {
             $(this)
                 .parent()
                 .find(".glyphicon-chevron-down")
                 .removeClass("glyphicon-chevron-down")
                 .addClass("glyphicon-chevron-up");
             })
         .on('hidden.bs.collapse', function() {
             $(this)
                 .parent()
                 .find(".glyphicon-chevron-up")
                 .removeClass("glyphicon-chevron-up")
                 .addClass("glyphicon-chevron-down");
             });
    function getScroll(){
    	var distancia = $(window).scrollTop();
    	if (distancia <= 5) {
    		$('header.index').removeClass('active');
    		$('.navbar-brand').removeClass('scroll')
    	}else{
    		$('header.index').addClass('active');
    		$('.navbar-brand').addClass('scroll')

    	}
    }
    $(window).scroll( function (){
    	getScroll();
    });
});