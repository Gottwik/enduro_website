// placeholder abstractor
var abstractor = function () {}

abstractor.prototype.abstract = function(context) {
	return new Promise(function(resolve, reject) {

		context['$linkified_text_hidden'] = true
		context['linkified_text'] = context['text'].replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

		resolve()

	})
}


module.exports = new abstractor()