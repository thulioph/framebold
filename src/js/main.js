head.js("src/js/vendor/jquery-1.10.2.min.js", "src/js/vendor/jquery.cycle.all.js",
 "src/js/vendor/colorbox.min.js", "src/js/vendor/mask_input.js", "src/js/vendor/jquery.lazyload.min.js", function(){

	jQuery(function() {

		// Cycle - http://jquery.malsup.com/cycle/
			$("").cycle({
				fx:     'fade',
				speed:  'slow',
				timeout: 6000,
				next:   '#next',
				prev:   '#prev',
			});

		// Mask Input - http://digitalbush.com/projects/masked-input-plugin/
			$("").mask("(99) 9999-9999");

		// Colorbox - http://www.jacklmoore.com/colorbox/
			$('a.gallery').colorbox({
				rel:'gal'
			});

		// Lazyload - http://www.appelsiini.net/projects/lazyload
			$("img").addClass("lazy");
			// Executa o plugin
			$("img.lazy").lazyload();

	});

});
