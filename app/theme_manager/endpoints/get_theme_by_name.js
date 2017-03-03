// * ———————————————————————————————————————————————————————— * //
// * 	/theme_manager/get_theme_by_name endpoint
// * ———————————————————————————————————————————————————————— * //
var add_part_endpoint = function () {}

// vendor dependencies
var _ = require('lodash')

add_part_endpoint.prototype.init = function (app) {
	app.get('/theme_manager/get_theme_by_name/:theme_name', (req, res) => {

		// stores the theme name
		var theme_name = req.params.theme_name

		// log this downlaod if stealth is not true
		// stealth is used to filter out requests from enduro tests
		if (!req.query.stealth) {
			theme_manager.increase_downloads_by_theme_name(theme_name, req)
		}

		// gets all theme
		enduro.api.flat.load('global/theme_manager/themes')
			.then((themes) => {

				// tries to find the theme by theme name
				var theme = _.find(themes.themes, { name: theme_name })
				if (theme) {
					res.send({ found: true, theme_info: theme })
				} else {
					res.send({ found: false })
				}
			})

	})
}

module.exports = new add_part_endpoint()
