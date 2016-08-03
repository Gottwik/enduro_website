// * ———————————————————————————————————————————————————————— * //
// * 	docnav
// * ———————————————————————————————————————————————————————— * //
define(
	['jquery'],
	function($) {

		var docnav = function(){}

		// initiation - gets called just once
		docnav.init = function(scroller) {

			scroller.scroll(function(scroll) {
				if($('.docs-list-placeholder').offset().top < scroll) {
					console.log($('.docs-list').outerWidth())
					$('.docs-list').css('width', $('.docs-list').outerWidth()).addClass('slime')
				} else {
					$('.docs-list').css('width', '100%').removeClass('slime')
				}

				var closest = get_closest_heading()
				$(closest).addClass('active')

				$('.side-menu-item').removeClass('active')

				$('.side-menu-' + $(closest).attr('id')).addClass('active')
			})

		}

		function get_closest_heading() {
			// shift middle screen to 1/3
			var screen_middle = $('body').scrollTop() + $('body').height() / 3

			return $('h1, h2, h3, h4').removeClass('active').toArray().reduce(function(prev, next) {
				return Math.abs($(next).offset().top - screen_middle) < Math.abs($(prev).offset().top - screen_middle)
					? next
					: prev
			})
		}

		return docnav
	}
)