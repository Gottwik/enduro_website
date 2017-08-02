{
	title: 'Generators',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Generators allows to create multiple pages based on one template. This feature also allows content managers to create new pages.\n\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474268328_generators_low.png)\n\n## Creating a generator\n* Create your handlebars template in `$$/pages/generators/:generatorname.hbs`\n* Create content file `$$/cms/generators/:generatorname/:pagename`.\n* Your page will be accessible at `/:generatorname/:pagename`\n\n## Admin UI\nAdmin is, as always, auto-pregenerated. No additional work needed. You can just create new pages easily.local\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474268933_Sep-19-2016 09-08-21.gif)\n\n\n## Generator template\nWhen user adds new page throught the Admin UI, the created page will be duplicated from the first content file in the generator. If you wish, you can create a `$$/cms/generators/:generatorname/:generatorname.js` and defined the content\'s template in this file.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Generators allows to create multiple pages based on one template. This feature also allows content managers to create new pages.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474268328_generators_low.png" alt=""></p>\n<h2 id="creating-a-generator">Creating a generator</h2>\n<ul>\n<li>Create your handlebars template in <code><span class="markdown_folder">/pages/generators/</span>:generatorname.hbs</code></li>\n<li>Create content file <code><span class="markdown_folder">/cms/generators/</span>:generatorname/:pagename</code>.</li>\n<li>Your page will be accessible at <code>/:generatorname/:pagename</code></li>\n</ul>\n<h2 id="admin-ui">Admin UI</h2>\n<p>Admin is, as always, auto-pregenerated. No additional work needed. You can just create new pages easily.local</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474268933_Sep-19-2016 09-08-21.gif" alt=""></p>\n<h2 id="generator-template">Generator template</h2>\n<p>When user adds new page throught the Admin UI, the created page will be duplicated from the first content file in the generator. If you wish, you can create a <code><span class="markdown_folder">/cms/generators/</span>:generatorname/:generatorname.js</code> and defined the content&#39;s template in this file.</p>\n',
		contents: [
			{
				heading: 'Creating a generator',
				level: '2',
				link: 'creating-a-generator'
			},
			{
				heading: 'Admin UI',
				level: '2',
				link: 'admin-ui'
			},
			{
				heading: 'Generator template',
				level: '2',
				link: 'generator-template'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}