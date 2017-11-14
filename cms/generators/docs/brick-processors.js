{
	title: 'Brick processors',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Brick processors opens enduro\'s internal processes to bricks/plugins. The idea is whenever you need to add funcionality to enduro, you just add a processor. You can add multiple processors they will be executed serially with first-registered-first-processed basis.\n\n# Usage\n\n```js\nenduro.api.brick_processors.add_processor(\'cms_context_processor\', function (cms_context) {\n	# modify cms_context and return promise\n})\n```\n\n# List of processors\n* **cms_context_processor** - executes each time context is retrieved and allows you to modify context before rendering. Bear in mind, the context will be modified on the fly, and modifications will not be saved as it is with [abstractors](/docs/abstractors).\n\nIf you are building a brick and enduro doesn\'t offer processor for what you need, feel free to open a ticket, pullrequest or reach out at [gitter](https://gitter.im/Enduro-js/Lobby).',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Brick processors opens enduro&#39;s internal processes to bricks/plugins. The idea is whenever you need to add funcionality to enduro, you just add a processor. You can add multiple processors they will be executed serially with first-registered-first-processed basis.</p>\n<h1 id="usage">Usage</h1>\n<pre><code class="lang-js">enduro.api.brick_processors.add_processor(&#39;cms_context_processor&#39;, function (cms_context) {\n    # modify cms_context and return promise\n})\n</code></pre>\n<h1 id="list-of-processors">List of processors</h1>\n<ul>\n<li><strong>cms_context_processor</strong> - executes each time context is retrieved and allows you to modify context before rendering. Bear in mind, the context will be modified on the fly, and modifications will not be saved as it is with <a href="/docs/abstractors">abstractors</a>.</li>\n</ul>\n<p>If you are building a brick and enduro doesn&#39;t offer processor for what you need, feel free to open a ticket, pullrequest or reach out at <a href="https://gitter.im/Enduro-js/Lobby">gitter</a>.</p>\n',
		contents: [
			{
				heading: 'Usage',
				level: '1',
				link: 'usage'
			},
			{
				heading: 'List of processors',
				level: '1',
				link: 'list-of-processors'
			}
		]
	},
	meta: {
		last_edited: 1510623546
	}
}