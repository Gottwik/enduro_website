// * ———————————————————————————————————————————————————————— * //
// * 	/theme_manager/get_all_themes endpoint
// * ———————————————————————————————————————————————————————— * //
var add_part_endpoint = function () {}

add_part_endpoint.prototype.init = function (app) {
	app.get('/theme_manager/get_all_themes', (req, res) => {

		enduro.api.flat.load('global/theme_manager/themes')
			.then((themes) => {
				res.send(themes.themes)
			})

	})
}

module.exports = new add_part_endpoint()
