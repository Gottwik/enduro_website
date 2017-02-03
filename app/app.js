var local_app = function () {}

local_app.prototype.init = function (app) {
	app.get('/theme_manager', (req, res) => {
		res.send({
			mirror: {
				description: 'Simple and minimalistic personal portfolio theme',
				author: 'Martin Gottweis',
				git_repository: 'https://github.com/Gottwik/enduro_mirror.git',
				zip_repository: 'https://github.com/Gottwik/enduro_mirror/archive/master.zip',
			}
		})
	})
}

module.exports = new local_app()
