var local_app = function () {}

// vendor dependencies
var _ = require('lodash')

local_app.prototype.init = function (app) {

	app.get('/theme_manager/get_all_themes', (req, res) => {

		enduro.flat.load('global/theme_manager/themes')
			.then((themes) => {
				res.send(themes.themes)
			})

	})

	app.get('/theme_manager/get_theme_by_name/:theme_name', (req, res) => {

		var theme_name = req.params.theme_name

		enduro.flat.load('global/theme_manager/themes')
			.then((themes) => {
				var theme = _.find(themes.themes, { name: theme_name })
				if (themes) {
					res.send({ found: true, theme_info: theme })
				} else {
					res.send({ found: false })
				}
			})

	})
}

module.exports = new local_app()
