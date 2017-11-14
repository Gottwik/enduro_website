{
	title: 'Context modifiers',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Context modifiers are very useful when building bricks. They modify all the context - every cms files based on some rules.\n\n# Example\n\nsay you have this context file:\n\n```js\n{\n	$deadline_type: \'date\',\n	deadline: \'2019-01-01\'\n}\n```\n\nand you decided that all date controls in your project should be full-width(you can set width of admin control by `$deadline_size: \'12\'`). To do this, you can use context modifier **add_sibling_to_type** either in your $$app/app.js or in the brick you are building:\n\n```\nenduro.api.brick_processors.add_processor(\'cms_context_processor\', function (cms_context) {\n	return new Promise(function (resolve, reject) {\n\n		enduro.api.context_modifiers.add_sibling_to_type(cms_context, \'date\', \'size\', 12)\n\n		resolve(cms_context)\n	})\n})\n```\n\n# List of modifiers\n\n## add_sibling_to_type\n* @param {cms context object} context\n* @param {string} type_to_search_for - will add siblings to all controls of this type\n* @param {string} added_termination - new termination key to add\n* @param {value} value - new value to add',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Context modifiers are very useful when building bricks. They modify all the context - every cms files based on some rules.</p>\n<h1 id="example">Example</h1>\n<p>say you have this context file:</p>\n<pre><code class="lang-js">{\n    $deadline_type: &#39;date&#39;,\n    deadline: &#39;2019-01-01&#39;\n}\n</code></pre>\n<p>and you decided that all date controls in your project should be full-width(you can set width of admin control by <code>$deadline_size: &#39;12&#39;</code>). To do this, you can use context modifier <strong>add_sibling_to_type</strong> either in your <span class="markdown_folder">app/app.js</span> or in the brick you are building:</p>\n<pre><code>enduro.api.brick_processors.add_processor(&#39;cms_context_processor&#39;, function (cms_context) {\n    return new Promise(function (resolve, reject) {\n\n        enduro.api.context_modifiers.add_sibling_to_type(cms_context, &#39;date&#39;, &#39;size&#39;, 12)\n\n        resolve(cms_context)\n    })\n})\n</code></pre><h1 id="list-of-modifiers">List of modifiers</h1>\n<h2 id="add_sibling_to_type">add_sibling_to_type</h2>\n<ul>\n<li>@param {cms context object} context</li>\n<li>@param {string} type_to_search_for - will add siblings to all controls of this type</li>\n<li>@param {string} added_termination - new termination key to add</li>\n<li>@param {value} value - new value to add</li>\n</ul>\n',
		contents: [
			{
				heading: 'Example',
				level: '1',
				link: 'example'
			},
			{
				heading: 'List of modifiers',
				level: '1',
				link: 'list-of-modifiers'
			},
			{
				heading: 'add_sibling_to_type',
				level: '2',
				link: 'add_sibling_to_type'
			}
		]
	},
	meta: {
		last_edited: 1510623055
	}
}