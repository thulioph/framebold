head.js("js/vendor/jquery-1.10.2.min.js", "js/vendor/modernizr.js", "js/vendor/jquery.cycle.all.js",
 "js/vendor/colorbox.min.js", "js/vendor/mask_input.js", "js/vendor/jquery.lazyload.min.js", function(){

 	jQuery(function() {

		// Cycle - http://jquery.malsup.com/cycle/
			// Algumas configurações do plugin
			$("").cycle({
				fx:     'fade',
				speed:  'slow',
				timeout: 6000,
				next:   '#next',
				prev:   '#prev',
			});

		// Mask Input - http://digitalbush.com/projects/masked-input-plugin/
			// Configuração para inputs de telefone
			$("").mask("(99) 9999-9999");

		// Colorbox - http://www.jacklmoore.com/colorbox/
			// Configuração padrão do plugin
			$('a.gallery').colorbox({
				rel:'gal'
			});

		// Lazyload - http://www.appelsiini.net/projects/lazyload
			// Adiciona uma class dinamicamente em todas as imagens
			$("img").addClass("lazy");
			// Executa o plugin
			$("img.lazy").lazyload();

	});

});
