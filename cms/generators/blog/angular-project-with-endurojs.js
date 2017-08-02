{
	title: 'Angular project with enduro.js',
	$date_value: '2017-01-26',
	$date_type: 'date',
	date: 'Thursday, 26 January, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Believe it or not but I\'ve made several angular projects with enduro.js. Just take a look at [bricklabels.com](http://www.bricklabels.com). This guide helps you to set up an angular 1.x project. I\'ve never tried to set up angular 2 project, but if you did, let me know how it went.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485435641_cp.png)\n\nCheck out the sample at: https://github.com/Gottwik/enduro_samples/tree/master/angular\n\n## Install angular\n\nAfter creating a regular enduro project by `enduro create myangularproject`, just go ahead and install angular by `bower i angular -S` and include it in your project `<script src="/assets/vendor/angular/angular.min.js"></script>`\n\n## Create your main app.js file\n\nCreate $$/assets/js/app.js file. We will define the angular app in this file:\n\n```\nvar endurojs_angular_app = angular\n	.module(\'endurojs_angular_app\', [])\n```\n\nDon\'t forget to include this by `<script src="/assets/js/app.js"></script>` and add the app to the html tag: `<html ng-app="endurojs_angular_app">`\n\nBam!, your project is all set up with angular.\n\n## Create dummy controller\n\nCreate $$/assets/js/controllers/dummy_controller.js file with dummy action:\n\n```\nendurojs_angular_app.controller(\'dummy_controller\', function ($scope, $interval) {\n\n	$scope.seconds = 0\n\n	$interval(function () {\n		$scope.seconds++\n	}, 100)\n\n})\n```\n\nand use this controller:\n```\n<div ng-controller="dummy_controller">\n	<div>{{seconds}}</div>\n</div>\n```\n\n> Notice that the angular template is escaped with a backslash( **** ) to not be compiled by enduro.js\n\n## Include your services, controllers, directives and utilities\n\nOne of the nice things enduro.js will help you with is splitting your angular components into separate files. Just add this code at the end of the body tag:\n\n```\n{{#files \'/assets/js/services\'}}\n	<script src="/assets/js/services{{this}}"></script>\n{{/files}}\n\n{{#files \'/assets/js/controllers\'}}\n	<script src="/assets/js/controllers{{this}}"></script>\n{{/files}}\n\n{{#files \'/assets/js/directives\'}}\n	<script src="/assets/js/directives{{this}}"></script>\n{{/files}}\n\n{{#files \'/assets/js/utilities\'}}\n	<script src="/assets/js/utilities{{this}}"></script>\n{{/files}}\n```\n\nThe enduro\'s built-in files helper acts like handlebars\' each but with list of files inside the specified folder as a context.\n\n## Passing enduro.js content context to angular app\nMost of the use cases why you would like to use enduro.js with angular is that you can define content with enduro.js\' nice admin interface. To pass use the context, just pass it onto a global variable by using a stringify helper and using triple curly braces:\n\n```\n<script type="text/javascript">\n	var context = {{{stringify this}}}\n</script>\n```',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Believe it or not but I&#39;ve made several angular projects with enduro.js. Just take a look at <a href="http://www.bricklabels.com">bricklabels.com</a>. This guide helps you to set up an angular 1.x project. I&#39;ve never tried to set up angular 2 project, but if you did, let me know how it went.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485435641_cp.png" alt=""></p>\n<p>Check out the sample at: <a href="https://github.com/Gottwik/enduro_samples/tree/master/angular">https://github.com/Gottwik/enduro_samples/tree/master/angular</a></p>\n<h2 id="install-angular">Install angular</h2>\n<p>After creating a regular enduro project by <code>enduro create myangularproject</code>, just go ahead and install angular by <code>bower i angular -S</code> and include it in your project <code>&lt;script src=&quot;/assets/vendor/angular/angular.min.js&quot;&gt;&lt;/script&gt;</code></p>\n<h2 id="create-your-main-app-js-file">Create your main app.js file</h2>\n<p>Create <span class="markdown_folder">/assets/js/app.js</span> file. We will define the angular app in this file:</p>\n<pre><code>var endurojs_angular_app = angular\n    .module(&#39;endurojs_angular_app&#39;, [])\n</code></pre><p>Don&#39;t forget to include this by <code>&lt;script src=&quot;/assets/js/app.js&quot;&gt;&lt;/script&gt;</code> and add the app to the html tag: <code>&lt;html ng-app=&quot;endurojs_angular_app&quot;&gt;</code></p>\n<p>Bam!, your project is all set up with angular.</p>\n<h2 id="create-dummy-controller">Create dummy controller</h2>\n<p>Create <span class="markdown_folder">/assets/js/controllers/dummy_controller.js</span> file with dummy action:</p>\n<pre><code>endurojs_angular_app.controller(&#39;dummy_controller&#39;, function ($scope, $interval) {\n\n    $scope.seconds = 0\n\n    $interval(function () {\n        $scope.seconds++\n    }, 100)\n\n})\n</code></pre><p>and use this controller:</p>\n<pre><code>&lt;div ng-controller=&quot;dummy_controller&quot;&gt;\n    &lt;div&gt;{{seconds}}&lt;/div&gt;\n&lt;/div&gt;\n</code></pre><blockquote>\n<p>Notice that the angular template is escaped with a backslash( <em>**</em> ) to not be compiled by enduro.js</p>\n</blockquote>\n<h2 id="include-your-services-controllers-directives-and-utilities">Include your services, controllers, directives and utilities</h2>\n<p>One of the nice things enduro.js will help you with is splitting your angular components into separate files. Just add this code at the end of the body tag:</p>\n<pre><code>{{#files &#39;/assets/js/services&#39;}}\n    &lt;script src=&quot;/assets/js/services{{this}}&quot;&gt;&lt;/script&gt;\n{{/files}}\n\n{{#files &#39;/assets/js/controllers&#39;}}\n    &lt;script src=&quot;/assets/js/controllers{{this}}&quot;&gt;&lt;/script&gt;\n{{/files}}\n\n{{#files &#39;/assets/js/directives&#39;}}\n    &lt;script src=&quot;/assets/js/directives{{this}}&quot;&gt;&lt;/script&gt;\n{{/files}}\n\n{{#files &#39;/assets/js/utilities&#39;}}\n    &lt;script src=&quot;/assets/js/utilities{{this}}&quot;&gt;&lt;/script&gt;\n{{/files}}\n</code></pre><p>The enduro&#39;s built-in files helper acts like handlebars&#39; each but with list of files inside the specified folder as a context.</p>\n<h2 id="passing-enduro-js-content-context-to-angular-app">Passing enduro.js content context to angular app</h2>\n<p>Most of the use cases why you would like to use enduro.js with angular is that you can define content with enduro.js&#39; nice admin interface. To pass use the context, just pass it onto a global variable by using a stringify helper and using triple curly braces:</p>\n<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;\n    var context = {{{stringify this}}}\n&lt;/script&gt;\n</code></pre>',
		contents: [
			{
				heading: 'Install angular',
				level: '2',
				link: 'install-angular'
			},
			{
				heading: 'Create your main app.js file',
				level: '2',
				link: 'create-your-main-app-js-file'
			},
			{
				heading: 'Create dummy controller',
				level: '2',
				link: 'create-dummy-controller'
			},
			{
				heading: 'Include your services, controllers, directives and utilities',
				level: '2',
				link: 'include-your-services-controllers-directives-and-utilities'
			},
			{
				heading: 'Passing enduro.js content context to angular app',
				level: '2',
				link: 'passing-enduro-js-content-context-to-angular-app'
			}
		]
	},
	teaser: {
		doc: 'Believe it or not but I\'ve made several angular projects with enduro.js. Just take a look at [bricklabels.com](http://www.bricklabels.com). This guide helps you to set up an angular 1.x project. I\'ve never tried to set up angular 2 project, but if you did, let me know how it went.',
		$image_type: 'image',
		image: 'https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485522044_3de38c1ab9551c4468800f13ea604386.jpg',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Believe it or not but I&#39;ve made several angular projects with enduro.js. Just take a look at <a href="http://www.bricklabels.com">bricklabels.com</a>. This guide helps you to set up an angular 1.x project. I&#39;ve never tried to set up angular 2 project, but if you did, let me know how it went.</p>\n',
			contents: []
		}
	},
	$title_: 'Angular project with enduro.js',
	$date_: 'Thursday, 26 January, 2017',
	$published_: false,
	meta: {
		last_edited: 1501680325
	}
}