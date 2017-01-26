{
	title: 'Linker',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro exposes some of it\'s functions comfortably under a global variable `enduro`.\n\nThese libraries are accessible with linker\n\n* [temper](/docs/temper)\n* flat_file_handler\n* pagelist_generator\n\n## Example usage\n\nYou can render a template in $$/pages folder dynamically by including **temper** in the $$/app/app.js file:\n\n```\nvar local_app = function () {}\n\nvar temper = enduro.temper\n\nlocal_app.prototype.init = function (app) {\n	app.get(\'/random\', function (req, res) {\n		temper.render(\'random\', {random_number: Math.random()})\n			.then((output) => {\n				res.send(output)\n			})\n	})\n}\n\nmodule.exports = new local_app()\n```\n\nNote that these two lines are identical. It\'s just nicer to use the first one:\n```\nvar temper = enduro.temper\nvar temper = require(ENDURO_FOLDER + \'/libs/temper/temper\')\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro exposes some of it&#39;s functions comfortably under a global variable <code>enduro</code>.</p>\n<p>These libraries are accessible with linker</p>\n<ul>\n<li><a href="/docs/temper">temper</a></li>\n<li>flat_file_handler</li>\n<li>pagelist_generator</li>\n</ul>\n<h2 id="example-usage">Example usage</h2>\n<p>You can render a template in <span class="markdown_folder">/pages</span> folder dynamically by including <strong>temper</strong> in the <span class="markdown_folder">/app/app.js</span> file:</p>\n<pre><code>var local_app = function () {}\n\nvar temper = enduro.temper\n\nlocal_app.prototype.init = function (app) {\n    app.get(&#39;/random&#39;, function (req, res) {\n        temper.render(&#39;random&#39;, {random_number: Math.random()})\n            .then((output) =&gt; {\n                res.send(output)\n            })\n    })\n}\n\nmodule.exports = new local_app()\n</code></pre><p>Note that these two lines are identical. It&#39;s just nicer to use the first one:</p>\n<pre><code>var temper = enduro.temper\nvar temper = require(ENDURO_FOLDER + &#39;/libs/temper/temper&#39;)\n</code></pre>',
		contents: [
			{
				heading: 'Example usage',
				level: '2',
				link: 'example-usage'
			}
		]
	}
}