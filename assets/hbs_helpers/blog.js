var _ = require('lodash')
var Promise = require('bluebird')

var pagelist_generator = require(ENDURO_FOLDER + '/libs/build_tools/pagelist_generator')
var flat_file_handler = require(ENDURO_FOLDER + '/libs/flat_utilities/flat_file_handler')

__templating_engine.registerHelper('blog', function (options) {

	var pages
	return pagelist_generator.get_cms_list()
		.then((pagelist) => {
			var get_content_promises = []
			pages = _.chain(pagelist.structured.blog)
				.filter((o) => { return typeof o === 'object' }).value() // filter pages only

			for (page_id in pages) {
				var page = pages[page_id]

				function get_content (page) {
					get_content_promises.push(flat_file_handler.load(page.fullpath).then((content) => { page.content = content }))
				}

				get_content(page)
			}

			return Promise.all(get_content_promises)
		})
		.then(() => {
			pages = _.chain(pages)
				.sortBy('content.$date_value').reverse() // sort by date
				.filter((page) => { return page.content.published }) // remove unpublished
				.value()

			return options.fn(pages)
		})
})
