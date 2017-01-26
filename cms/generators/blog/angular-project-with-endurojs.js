{
	title: 'Angular project with enduro.js',
	$date_value: '2017-01-26',
	$date_type: 'date',
	date: 'Thursday, 26 January, 2017',
	published: false,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Believe it or not but I\'ve made several angular projects with enduro.js. Just take a look at [bricklabels.com](http://www.bricklabels.com). This guide helps you to set up an angular 1.x project. I\'ve never tried to set up angular 2 project, but if you did, let me know how it went.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485435641_cp.png)\n\nCheck out the sample at: https://github.com/Gottwik/enduro_samples/tree/master/angular\n\n## Install angular\n\nAfter creating a regular enduro project by `enduro create myangularproject`, just go ahead and install angular by `bower i angular -S` and include it in your project `<script src="/assets/vendor/angular/angular.min.js"></script>`\n\n## Create your main app.js file\n\nCreate $$/assets/js/app.js file. We will define the angular app in this file:\n\n```\nvar endurojs_angular_app = angular\n	.module(\'endurojs_angular_app\', [])\n```\n\nDon\'t forget to include this app.js to the index.hbs `<script src="/assets/js/app.js"></script>`\n\nBam!, your project is all set up with angular.\n\n## Create dummy controller\n\nCreate $$/assets/js/controllers/dummy_controller.js file with dummy action:\n\n```\nendurojs_angular_app.controller(\'dummy_controller\', function ($scope, $interval) {\n\n	$scope.seconds = 0\n\n	$interval(function () {\n		$scope.seconds++\n	}, 100)\n\n})\n```\n\nand use this controller:\n```\n<div ng-controller="dummy_controller">\n	<div>\{{seconds}}</div>\n</div>\n```\n\n> Notice that the angular template is escaped with a backslash( **\** ) to not be compiled by enduro.js\n\n## Include your services, controllers, directives and utilities\n\nOne of the nice things enduro.js will help you with is splitting your angular components into separate files. Just add this code at the end of the body tag:\n\n```\n{{#files \\'/assets/js/services\\'}}\n	<script src="/assets/js/services{{this}}"></script>\n{{/files}}\n\n{{#files \\'/assets/js/controllers\\'}}\n	<script src="/assets/js/controllers{{this}}"></script>\n{{/files}}\n\n{{#files \\'/assets/js/directives\\'}}\n	<script src="/assets/js/directives{{this}}"></script>\n{{/files}}\n\n{{#files \\'/assets/js/utilities\\'}}\n	<script src="/assets/js/utilities{{this}}"></script>\n{{/files}}\n```\n\nThe enduro\'s built-in files helper acts like handlebars\' each but with list of files inside the specified folder as a context.\n\n## Passing enduro.js content context to angular app\nMost of the use cases why you would like to use enduro.js with angular is that you can define content with enduro.js\' nice admin interface. To pass use the context, just pass it onto a global variable by using a stringify helper and using triple curly braces:\n\n```\n<script type="text/javascript">\n	var context = {{{stringify this}}}\n</script>\n```',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '',
		contents: []
	},
	teaser: {
		doc: '',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '',
			contents: []
		}
	},
	$title_: 'Angular project with enduro.js',
	$date_: 'Thursday, 26 January, 2017',
	$published_: false,
	$doc_: 'Believe it or not but I\'ve made several angular projects with enduro.js. Just take a look at [bricklabels.com](http://www.bricklabels.com).\n\n## Install angular\n\nAfter creating a regular enduro project by `enduro create myangularproject`, just go ahead and install angular by `bower i angular -S` and include it in your project\n\n## Create your services, controllers, directives and utilities\n\nOne of the nice things enduro.js will help you with is splitting your angular components into separate files. Just add this code at the end of the body tag:\n\n```\n	{{#files \'/assets/js/services\'}}\n		<script src="/assets/js/services{{this}}"></script>\n	{{/files}}\n\n	{{#files \'/assets/js/controllers\'}}\n		<script src="/assets/js/controllers{{this}}"></script>\n	{{/files}}\n\n	{{#files \'/assets/js/directives\'}}\n		<script src="/assets/js/directives{{this}}"></script>\n	{{/files}}\n\n	{{#files \'/assets/js/utilities\'}}\n		<script src="/assets/js/utilities{{this}}"></script>\n	{{/files}}\n```'
}