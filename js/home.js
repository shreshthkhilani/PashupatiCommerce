$(document).ready(function () {
	$('.up').hide();

	var baseurl = '';

	$('button#biggetintouch').click(function () {
		window.location = baseurl + '/contact/';
	});

	var pagelist = ['#top', '#about', '#better', '#partners'];

	$(window).scroll(function () {
		var page0ht = $(pagelist[0]).offset().top;
		var page1ht = $(pagelist[1]).offset().top;
		var page2ht = $(pagelist[2]).offset().top;
		var page3ht = $(pagelist[3]).offset().top;
		var height = $(window).scrollTop();
    if (height  > 1) {
    	$('#header').addClass('headershadow');
    } else {
    	$('#header').removeClass('headershadow');
    }
    if (height >= page3ht) {
    	$('.down').hide();
    	$('.up').show();
    } else {
    	$('.down').show();
    	$('.up').hide();
    }

		if (height >= page0ht && height < page1ht) {
			$('#hc1').addClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= page1ht && height < page2ht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').addClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= page2ht && height < page3ht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').addClass('fullcircle');
			$('#hc4').removeClass('fullcircle');
		} else if (height >= page3ht) {
			$('#hc1').removeClass('fullcircle');
			$('#hc2').removeClass('fullcircle');
			$('#hc3').removeClass('fullcircle');
			$('#hc4').addClass('fullcircle');
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
		var page1ht = $(pagelist[1]).offset().top;
		var page2ht = $(pagelist[2]).offset().top;
		var page3ht = $(pagelist[3]).offset().top + 1;
		var height = $(window).scrollTop();
		if (height >= page0ht && height < page1ht) {
			scrolltothiselem(pagelist[1]);
		} else if (height >= page1ht && height < page2ht) {
			scrolltothiselem(pagelist[2]);
		} else if (height >= page2ht && height < page3ht) {
			scrolltothiselem(pagelist[3]);
		} 
	}

	var onepageup = function () {
		var page0ht = $(pagelist[0]).offset().top + 1;
		var page1ht = $(pagelist[1]).offset().top + 1;
		var page2ht = $(pagelist[2]).offset().top + 1;
		var page3ht = $(pagelist[3]).offset().top + 1;
		var height = $(window).scrollTop();
	  if (height > page0ht && height <= page1ht) {
	  	scrolltothiselem(pagelist[0]);
		} else if (height > page1ht && height <= page2ht) {
			scrolltothiselem(pagelist[1]);
		} else if (height > page2ht && height <= page3ht) {
			scrolltothiselem(pagelist[2]);
		} else if (height > page3ht) {
			scrolltothiselem(pagelist[3]);
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
	$('#hc3').click(function () {
		scrolltothiselem(pagelist[2]);
	});
	$('#hc4').click(function () {
		scrolltothiselem(pagelist[3]);
	});
});