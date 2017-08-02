{
	title: 'Termination',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Termination is adding information to data fields that is used exclusively by admin interface. You can specify all kinds of properties, such as types, limitations, hide/show things, remove frames, size the input fields and much more\n\nGeneraly, to use any termination, you prepend dollar sign -\'$\' and add termination property after a underscore. So if you have field `name`, you can hide it from admin by `$name_hidden: true`.\n\n## Example\nThis \n```\n{\n	background_image: \'https://cdn.meme.am/instances/500x/66927624.jpg\'\n}\n```\nGives you this\n\n![](/assets/img/example_files/background-image-text.png)\n\nBut what is much cooler is saying the background_image field is an image. Like this:\n```\n{\n	$background_image_type: \'image\',\n	background_image: \'https://cdn.meme.am/instances/500x/66927624.jpg\'\n}\n```\n\n![](/assets/img/example_files/typedbackgroundimage.png)\n\nCheck out the available types to choose from at [List of admin control types](/docs/list-of-admin-control-types)',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Termination is adding information to data fields that is used exclusively by admin interface. You can specify all kinds of properties, such as types, limitations, hide/show things, remove frames, size the input fields and much more</p>\n<p>Generaly, to use any termination, you prepend dollar sign -&#39;$&#39; and add termination property after a underscore. So if you have field <code>name</code>, you can hide it from admin by <code>$name_hidden: true</code>.</p>\n<h2 id="example">Example</h2>\n<p>This </p>\n<pre><code>{\n    background_image: &#39;https://cdn.meme.am/instances/500x/66927624.jpg&#39;\n}\n</code></pre><p>Gives you this</p>\n<p><img src="/assets/img/example_files/background-image-text.png" alt=""></p>\n<p>But what is much cooler is saying the background_image field is an image. Like this:</p>\n<pre><code>{\n    $background_image_type: &#39;image&#39;,\n    background_image: &#39;https://cdn.meme.am/instances/500x/66927624.jpg&#39;\n}\n</code></pre><p><img src="/assets/img/example_files/typedbackgroundimage.png" alt=""></p>\n<p>Check out the available types to choose from at <a href="/docs/list-of-admin-control-types">List of admin control types</a></p>\n',
		contents: [
			{
				heading: 'Example',
				level: '2',
				link: 'example'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}