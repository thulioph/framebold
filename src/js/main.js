var Main = {};

Main = {
	_BASEPATH: '../src/images',
	_currentScreen: null,

	setUp: function(){
		var that = this;

		that._currentScreen = $('body').data('screen');

		if (that._currentScreen == 'home' ) {
			that.Slide.createSlide();
		};

		that.Modal.setUp();
	},

	Form: {
		validation: function(){
			var that = this,
				formaPgto = $('#creditCardType'),
				valueOption;

			$(formaPgto).on('change', function(event){
				valueOption = $(event.currentTarget).val();

				if (valueOption == '') {
					that.hideAll();
				} else if(valueOption == 'boleto') {
					that.showBoleto()
				} else {
					that.showCards();
				}
			});

			$("#telefone").mask("(99) 9999-9999");
			$("#cep").mask("99.999-999");
			$("#dt-validade").mask("99/99/9999");
		},

		showBoleto: function(){
			$('.type-cards').slideUp(200);
			$('.type-boleto').slideDown(200);
		},

		showCards: function(){
			$('.type-boleto').slideUp(200);
			$('.type-cards').slideDown(200);
		},

		hideAll: function(){
			$('.type-boleto, .type-cards').slideUp(200);
		}
	},

	Slide: {
		_slide: $('#slide-primary'),
		_slide2: $('#slide-secondary'),

		createSlide: function() {
			var that = this;

			that._slide.owlCarousel({
				navigation      : false,
				slideSpeed      : 900,
				paginationSpeed : 1000,
				singleItem      : true,
				autoPlay        : 5000,
				pagination      : false,
				stopOnHover     : true
			});

			$('.slide-primary').on('click', '.slide-next', function(){
				that._slide.data('owlCarousel').next();
			});

			$('.slide-primary').on('click', '.slide-prev', function(){
				that._slide.data('owlCarousel').prev();
			});

			that._slide2.owlCarousel({
				navigation      : false,
				slideSpeed      : 900,
				paginationSpeed : 1000,
				singleItem      : true,
				autoPlay        : 5000,
				pagination      : false,
				stopOnHover     : true
			});

			$('.slide-testimonials').on('click', '.slide-next', function(){
				that._slide2.data('owlCarousel').next();
			});

			$('.slide-testimonials').on('click', '.slide-prev', function(){
				that._slide2.data('owlCarousel').prev();
			});
		}
	},

	SortProducts: {
		filterProducts: function() {
			$('#list-products').mixItUp();
		}
	},

	Modal: {
		_modalOverlay: '',

		setUp: function(){
			var that = this;

			$('#footer').find('.links').on('click', 'a', function(event){
				var currentTarget = event.currentTarget,
					url = currentTarget.href;

				that._modalOverlay = $('<div>')
					.addClass('modalOverlay')
					.appendTo('body');

				$.ajax({
					url: url,
					type: 'GET',
					dataType: 'html',
					beforeSend: function(){
						$('<img>').attr({
							src: 'images/loading.gif',
							alt: 'Carregando'
						})
						.addClass('loading')
						.fadeIn()
						.appendTo(that._modalOverlay);
					},

					complete: function(){
						$('.loading').remove();
					},

					success: function(data){
						$(data).fadeIn().appendTo(that._modalOverlay);
					}
				});

				event.preventDefault();
			})

			$('body').on('click', '.sprite-btn-close', function(event){
				that._modalOverlay.fadeOut();

				setTimeout(function(){
					that._modalOverlay.remove();
				}, 1000);
			})
		}
	},

	addClass: {
		classActiveAbout: function() {
			var navLink = document.querySelectorAll('.nav-item');

			for(var i = 0; i < navLink.length; i++) {
				navLink[0].classList.add('thulio');
			}
		},
		classActiveProducts: function () {
			var navLink = document.querySelectorAll('.nav-item');

			for(var i = 0; i < navLink.length; i++) {
				navLink[1].classList.add('thulio');
			}
		},
		classActiveContact: function () {
			var navLink = document.querySelectorAll('.nav-item');

			for(var i = 0; i < navLink.length; i++) {
				navLink[4].classList.add('thulio');
			}
		}
	}
}