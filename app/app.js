var local_app = function () {}

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
				if (theme_name in themes.themes) {
					res.send({ found: true, theme_info: themes.themes[theme_name] })
				} else {
					res.send({ found: false })
				}
			})

	})
}

module.exports = new local_app()
