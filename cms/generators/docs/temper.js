{
	title: 'Temper',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Temper renders a template with a provided context.\n\n`function render(filename, context)`\n* **@ filename** (string) - path to the template relative to the $$/pages folder.\n* **@ context** (object) - data to be passed onto the handlebars template\n* **> returns** (promise) with processed html data as a payload\n\n## Example usage\n\n$$/pages/user.hbs content:\n\n```\n<div>user\'s name: {{user_name}}</div>\n```\n\nWe can render this template by create an express route in the $$/app/app.js file:\n\n```\napp.get(\'/user\', function (req, res) {\n	enduro.api.temper.render(\'user\', { user_name: \'martin\' })\n		.then((output) => {\n			res.send(output)\n		})\n})\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Temper renders a template with a provided context.</p>\n<p><code>function render(filename, context)</code></p>\n<ul>\n<li><strong>@ filename</strong> (string) - path to the template relative to the <span class="markdown_folder">/pages</span> folder.</li>\n<li><strong>@ context</strong> (object) - data to be passed onto the handlebars template</li>\n<li><strong>&gt; returns</strong> (promise) with processed html data as a payload</li>\n</ul>\n<h2 id="example-usage">Example usage</h2>\n<p><span class="markdown_folder">/pages/user.hbs</span> content:</p>\n<pre><code>&lt;div&gt;user&#39;s name: {{user_name}}&lt;/div&gt;\n</code></pre><p>We can render this template by create an express route in the <span class="markdown_folder">/app/app.js</span> file:</p>\n<pre><code>app.get(&#39;/user&#39;, function (req, res) {\n    enduro.api.temper.render(&#39;user&#39;, { user_name: &#39;martin&#39; })\n        .then((output) =&gt; {\n            res.send(output)\n        })\n})\n</code></pre>',
		contents: [
			{
				heading: 'Example usage',
				level: '2',
				link: 'example-usage'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}