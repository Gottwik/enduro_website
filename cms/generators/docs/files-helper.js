{
	title: 'Files helper',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Built-in files helper allows to display a list of files in your template.\n\n## Usage\n\nThe helper takes just one argument, a path relative to project\'s root folder:\n\n```html\n{{#files \'/assets/images/\'}}\n	<p>Image: {{this.file_name_no_extension}}</p>\n{{/files}}\n```\n\nand returns these properties of the file:\n\n```js\n{\n	absolute_path: \'/Users/123/projects/someproject/pages/index.hbs\',\n	relative_path: \'/index.hbs\',\n	file_name: \'index.hbs\',\n	file_name_no_extension: \'index\',\n	depth: 0\n}\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Built-in files helper allows to display a list of files in your template.</p>\n<h2 id="usage">Usage</h2>\n<p>The helper takes just one argument, a path relative to project&#39;s root folder:</p>\n<pre><code class="lang-html">{{#files &#39;/assets/images/&#39;}}\n    &lt;p&gt;Image: {{this.file_name_no_extension}}&lt;/p&gt;\n{{/files}}\n</code></pre>\n<p>and returns these properties of the file:</p>\n<pre><code class="lang-js">{\n    absolute_path: &#39;/Users/123/projects/someproject/pages/index.hbs&#39;,\n    relative_path: &#39;/index.hbs&#39;,\n    file_name: &#39;index.hbs&#39;,\n    file_name_no_extension: &#39;index&#39;,\n    depth: 0\n}\n</code></pre>\n',
		contents: [
			{
				heading: 'Usage',
				level: '2',
				link: 'usage'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}