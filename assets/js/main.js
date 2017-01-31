require.config({
	baseUrl: '/assets/',

	paths: {
		// vendor dependencies
		jquery: 'vendor/jquery/dist/jquery.min',
		scroller: 'vendor/kiskabricks_scroller/scroller',

		// local dependencies
		docnav: 'js/features/docnav',
	},
})

require(['jquery'], function ($) {

	$(document).ready(function () {
		$('code').each(function (i, inline) {
			hljs.highlightBlock(inline)
		})
	})

	if ($('.docs-list').length) {
		require(['docnav', 'scroller'], function (docnav, scroller) {
			scroller.init()
			docnav.init(scroller)
		})
	}

})
