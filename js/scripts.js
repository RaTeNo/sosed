$(() => {
	// Отзывы
	if ($('.reviews .swiper-container').length) {
		let sliders = []

		$('.reviews .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 24,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1188: {
							spaceBetween: 30,
							slidesPerView: 3
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => {
								let thumbH = $(swiper.$el).find('.thumb').outerHeight()

								$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
								$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
							})
						},
						resize: swiper => {
							setTimeout(() => {
								let thumbH = $(swiper.$el).find('.thumb').outerHeight()

								$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
								$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Анимация блока запускается когда блок в видимой части на >10% от высоты экрана
	inView.offset($(window).innerHeight() * 0.25)

	if ($(window).width() > 767) {
		// Появление блоков
		if ($('.first_section').length) {
			inView('.first_section')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.info .items > *').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})

					setTimeout(function () {
						$(el).find('.title').addClass('animate__animated animate__fadeInUp')
					}, 500)

					setTimeout(function () {
						$(el).find('.desc').addClass('animate__animated animate__fadeInUp')
					}, 750)

					setTimeout(function () {
						$(el).find('.btn').addClass('animate__animated animate__fadeInUp')
					}, 1000)
				})
		}

		if ($('.about_info').length) {
			inView('.about_info')
				.on('enter', function (el) {
					setTimeout(function () {
						$(el).find('.data .desc').addClass('animate__animated animate__fadeInLeft')
					}, 200)

					setTimeout(function () {
						$(el).find('.video_link').addClass('animate__animated animate__fadeInRight')
					}, 500)
				})
		}

		if ($('.stats').length) {
			inView('.stats')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})

					setTimeout(function () {
						$(el).find('.text').addClass('animate__animated animate__fadeInUp')
					}, delay + 200)
				})
		}

		if ($('.for_whom').length) {
			inView('.for_whom')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}

		if ($('.program').length) {
			inView('.program')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})

					setTimeout(function () {
						$(el).find('.bottom').addClass('animate__animated animate__zoomIn')
					}, delay + 200)
				})
		}

		if ($('.facts').length) {
			inView('.facts')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.row > *').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}

		if ($('.persons').length) {
			inView('.persons')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.person').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}

		if ($('.you_get').length) {
			inView('.you_get')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}

		if ($('.tariffs').length) {
			inView('.tariffs')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.tariff').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}

		if ($('.accordion').length) {
			inView('.accordion')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.accordion_item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.free').length) {
			inView('.free')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.thumb').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInRight')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.free').length) {
			inView('.free')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.data').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInLeft')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.contract').length) {
			inView('.contract')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.data').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInRight')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.contract').length) {
			inView('.contract')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.thumb').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInLeft')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.chance').length) {
			inView('.chance')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.item').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInUp')
						}, delay)

						delay = delay + 200
					})					
				})
		}
		if ($('.maps').length) {
			inView('.maps')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.map_wrap').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInRight')
						}, delay)

						delay = delay + 200
					})
				})
		}
		if ($('.maps').length) {
			inView('.maps')
				.on('enter', function (el) {
					let delay = 200

					$(el).find('.data').each(function () {
						var _self = $(this)

						setTimeout(function () {
							_self.addClass('animate__animated animate__fadeInLeft')
						}, delay)

						delay = delay + 200
					})
				})
		}
	}
})