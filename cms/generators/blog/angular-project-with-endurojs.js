{
	title: '',
	$date_value: '2016-12-22',
	$date_type: 'date',
	date: 'Thursday, 22 December, 2016',
	published: false,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '',
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