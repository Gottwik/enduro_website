{
	title: 'Linker',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro.js exposes some of it\'s functionality comfortably under a global variable `enduro` through the use of [linker](https://github.com/Gottwik/Enduro/blob/master/libs/linker/linker.js).\n\n## API functions\n\nYou can access these libraries under `enduro.api`\n\n* [temper](/docs/temper)\n* flat\n* flat_helpers\n* pagelist_generator\n* logger\n\n### Example usage\n\nYou can render a template in $$/pages folder dynamically by using **enduro.apitemper** in the $$/app/app.js file:\n\n```\nvar local_app = function () {}\n\nvar temper = enduro.api.temper\n\nlocal_app.prototype.init = function (app) {\n	app.get(\'/random\', function (req, res) {\n		temper.render(\'random\', { random_number: Math.random() })\n			.then((output) => {\n				res.send(output)\n			})\n	})\n}\n\nmodule.exports = new local_app()\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro.js exposes some of it&#39;s functionality comfortably under a global variable <code>enduro</code> through the use of <a href="https://github.com/Gottwik/Enduro/blob/master/libs/linker/linker.js">linker</a>.</p>\n<h2 id="api-functions">API functions</h2>\n<p>You can access these libraries under <code>enduro.api</code></p>\n<ul>\n<li><a href="/docs/temper">temper</a></li>\n<li>flat</li>\n<li>flat_helpers</li>\n<li>pagelist_generator</li>\n<li>logger</li>\n</ul>\n<h3 id="example-usage">Example usage</h3>\n<p>You can render a template in <span class="markdown_folder">/pages</span> folder dynamically by using <strong>enduro.apitemper</strong> in the <span class="markdown_folder">/app/app.js</span> file:</p>\n<pre><code>var local_app = function () {}\n\nvar temper = enduro.api.temper\n\nlocal_app.prototype.init = function (app) {\n    app.get(&#39;/random&#39;, function (req, res) {\n        temper.render(&#39;random&#39;, { random_number: Math.random() })\n            .then((output) =&gt; {\n                res.send(output)\n            })\n    })\n}\n\nmodule.exports = new local_app()\n</code></pre>',
		contents: [
			{
				heading: 'API functions',
				level: '2',
				link: 'api-functions'
			},
			{
				heading: 'Example usage',
				level: '3',
				link: 'example-usage'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}