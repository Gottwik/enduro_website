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
					$('.docs-list').addClass('slime')
				} else {
					$('.docs-list').removeClass('slime')
				}
			})


		}


		return docnav
	}
)