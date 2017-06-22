var local_app = function () {}

// vendor dependencies
var _ = require('lodash')
var path = require('path')
var mongo_client = require('mongodb').MongoClient
var glob = require('glob')

global.theme_manager = require('./theme_manager/theme_manager')

// constants
var DATABASE_URL = (enduro.config.secret && enduro.config.secret.DATABASE_URL) || process.env.DATABASE_URL

local_app.prototype.init = function (app) {

	// try to connect to mongodb
	mongo_client.connect(DATABASE_URL, function (err, mongo_db) {
		if (err) { console.log(err) }

		theme_manager.init(mongo_db)
	})

	// hook up /theme_manager endpoints
	glob.sync(path.join(enduro.project_path, 'app', 'theme_manager', 'endpoints', '**', '*.js')).forEach((file) => {
		require(path.resolve(file)).init(app)
	})

	app.get('/.well-known/acme-challenge/:content', function(req, res) {
		res.send('sQ3JynaahogISlbMHgHnJxMS71nuJe40kd9dIsnZuT4.aPQQFbg-VpHf30uqulf1lthtKZVB6jy01SchmHmwCh8')
	})

}


module.exports = new local_app()
