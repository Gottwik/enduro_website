var parts_manager = function () {}

// vendor dependencies
var request = require('request-promise')

parts_manager.prototype.init = function (db) {
	var self = this
	self.themedownloads_collection = db.collection('enduro_website_themedownloads')
	self.themedownloads_detailed_collection = db.collection('enduro_website_themedownloads_detailed')
}

parts_manager.prototype.increase_downloads_by_theme_name = function (theme_name, req) {
	var self = this

	self.themedownloads_collection.update(
		{ name: theme_name },
		{ $inc: { downloads: 1 }},
		{ upsert: true }
	)

	var ip = req.ip

	request.get('http://ip-api.com/json/' + ip)
		.then((location) => {

			location = JSON.parse(location)

			self.themedownloads_detailed_collection.insert({
				theme_name: theme_name,
				ip: req.ip,
				location: location,
				timestamp: +new Date,
			})
		})

}

module.exports = new parts_manager()
