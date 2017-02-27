var parts_manager = function () {}

// vendor dependencies

parts_manager.prototype.init = function (db) {
	var self = this
	self.themedownloads_collection = db.collection('enduro_website_themedownloads')
}

parts_manager.prototype.increase_downloads_by_theme_name = function (theme_name) {
	var self = this

	self.themedownloads_collection.update(
		{ name: theme_name },
		{ $inc: { downloads: 1 }},
		{ upsert:true }
	)
}

module.exports = new parts_manager()
