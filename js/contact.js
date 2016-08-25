$(document).ready(function () {
	$('.up').hide();

	var pagelist = ['#top', '#contactform'];

	$(window).scroll(function () {
		var page0ht = $(pagelist[0]).offset().top;
		var page1ht = $(pagelist[1]).offset().top;
		var height = $(window).scrollTop();
    if (height  > 1) {
    	$('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
    if (height >= page1ht) {
    	$('.down').hide();
    	$('.up').show();
    } else {
    	$('.down').show();
    	$('.up').hide();
    }

		if (height >= page0ht && height < page1ht) {
			$('#hc1').addClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
		} else if (height >= page1ht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').addClass('fullcircle');
		} 
	});
	$('.down').click(function () {
		onepagedown();
	});
	$('.up').click(function () {
		$('html, body').animate({
        scrollTop: $(pagelist[0]).offset().top + 1
    }, 3000);
	});
	$(window).keydown(function (e) {
		var key = e.keyCode;
		if (key === 39) {
			onepagedown();
		} else if (key === 37) {
			onepageup();
		}
	});

	var onepagedown = function () {
		var page0ht = $(pagelist[0]).offset().top;
		var page1ht = $(pagelist[1]).offset().top + 1;
		var height = $(window).scrollTop();
		if (height >= page0ht && height < page1ht) {
			scrolltothiselem(pagelist[1]);
		} 
	}

	var onepageup = function () {
		var page0ht = $(pagelist[0]).offset().top + 1;
		var page1ht = $(pagelist[1]).offset().top + 1;
		var height = $(window).scrollTop();
	  if (height > page0ht && height <= page1ht) {
	  	scrolltothiselem(pagelist[0]);
		} else if (height > page1ht) {
			scrolltothiselem(pagelist[1]);
		} 
	}

	var scrolltothiselem = function (elem) {
		$('html, body').animate({
        scrollTop: $(elem).offset().top + 1
    }, 1200);
	};

	$('#hc1').click(function () {
		scrolltothiselem(pagelist[0]);
	});
	$('#hc2').click(function () {
		scrolltothiselem(pagelist[1]);
	});
});