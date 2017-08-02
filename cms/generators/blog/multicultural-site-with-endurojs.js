{
	title: 'Multicultural site with enduro.js',
	$date_value: '2017-01-25',
	$date_type: 'date',
	date: 'Wednesday, 25 January, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro.js provides multicultural pages out-of-the-box. Follow this short guide to learn how to set it up or check out the sample at https://github.com/Gottwik/enduro_samples/tree/master/multiculture\n\n## Setting up cultures\nFirst you need to define a **list of cultures** your site will be in. There is a convenient command line shortcut to do this:\n\n```\n$ enduro addculture en de fr\n```\n\nThis command tells enduro.js to generate separate pages for **en**, **de** and **fr** cultures.\n\n## Admin interface\nAdding cultures also enables comfortable switching cultures in the admin interface.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485356238_Jan-19-2017 14-18-15.gif)\n\nPro tip: You can use Cmd+1, Cmd+2, Cmd+3... to switch between cultures.\n\n\n## Routing\nAfter adding cultures, your page will be accessible by adding the culture slug in front of the url, so the german version will be at **www.yourdomain.com/de**.\n\nNotice that enduro.js will generate these culture-specific pages **in addition** to the default domain (first specified) for backward compatibility. In other words, **www.yourdomain.com/blog** will serve the same page as **www.yourdomain.com/en/blog**\n\n## Remove a culture\nThe cultures are stored in $$/cms/config/babel.js which look like this:\n\n```\n{\n	cultures: [\n		\'en\',\n		\'de\',\n		\'fr\'\n	]\n}\n```\n\nYou are free to modify this file to add, remove or edit cultures.\n\n## Like a boss\nYou can add culture_specific content by editing the content file directly with using [Termination](http://www.endurojs.com/docs/termination). Notice that the german content value just has **$** in front(that\'s the termination part) and **_de** at the end. Enduro.js parses this file and replaces `greeting` with `greeting_de` when generating the `de` culture.\n\n```\n{\n	greeting: \'Hello\',\n	superlative: \'nice\',\n	$greeting_de: \'Guten tag\',\n	$greeting_fr: \'Bonne journée\'\n}\n```',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro.js provides multicultural pages out-of-the-box. Follow this short guide to learn how to set it up or check out the sample at <a href="https://github.com/Gottwik/enduro_samples/tree/master/multiculture">https://github.com/Gottwik/enduro_samples/tree/master/multiculture</a></p>\n<h2 id="setting-up-cultures">Setting up cultures</h2>\n<p>First you need to define a <strong>list of cultures</strong> your site will be in. There is a convenient command line shortcut to do this:</p>\n<pre><code>$ enduro addculture en de fr\n</code></pre><p>This command tells enduro.js to generate separate pages for <strong>en</strong>, <strong>de</strong> and <strong>fr</strong> cultures.</p>\n<h2 id="admin-interface">Admin interface</h2>\n<p>Adding cultures also enables comfortable switching cultures in the admin interface.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485356238_Jan-19-2017 14-18-15.gif" alt=""></p>\n<p>Pro tip: You can use Cmd+1, Cmd+2, Cmd+3... to switch between cultures.</p>\n<h2 id="routing">Routing</h2>\n<p>After adding cultures, your page will be accessible by adding the culture slug in front of the url, so the german version will be at <strong>www.yourdomain.com/de</strong>.</p>\n<p>Notice that enduro.js will generate these culture-specific pages <strong>in addition</strong> to the default domain (first specified) for backward compatibility. In other words, <strong>www.yourdomain.com/blog</strong> will serve the same page as <strong>www.yourdomain.com/en/blog</strong></p>\n<h2 id="remove-a-culture">Remove a culture</h2>\n<p>The cultures are stored in <span class="markdown_folder">/cms/config/babel.js</span> which look like this:</p>\n<pre><code>{\n    cultures: [\n        &#39;en&#39;,\n        &#39;de&#39;,\n        &#39;fr&#39;\n    ]\n}\n</code></pre><p>You are free to modify this file to add, remove or edit cultures.</p>\n<h2 id="like-a-boss">Like a boss</h2>\n<p>You can add culture_specific content by editing the content file directly with using <a href="http://www.endurojs.com/docs/termination">Termination</a>. Notice that the german content value just has <strong>$</strong> in front(that&#39;s the termination part) and <strong>_de</strong> at the end. Enduro.js parses this file and replaces <code>greeting</code> with <code>greeting_de</code> when generating the <code>de</code> culture.</p>\n<pre><code>{\n    greeting: &#39;Hello&#39;,\n    superlative: &#39;nice&#39;,\n    $greeting_de: &#39;Guten tag&#39;,\n    $greeting_fr: &#39;Bonne journée&#39;\n}\n</code></pre>',
		contents: [
			{
				heading: 'Setting up cultures',
				level: '2',
				link: 'setting-up-cultures'
			},
			{
				heading: 'Admin interface',
				level: '2',
				link: 'admin-interface'
			},
			{
				heading: 'Routing',
				level: '2',
				link: 'routing'
			},
			{
				heading: 'Remove a culture',
				level: '2',
				link: 'remove-a-culture'
			},
			{
				heading: 'Like a boss',
				level: '2',
				link: 'like-a-boss'
			}
		]
	},
	teaser: {
		doc: 'Enduro.js provides multicultural pages out-of-the-box. Follow this short guide to learn how to set it up',
		$image_type: 'image',
		image: 'https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485522378_aec-1822525_640.jpg',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Enduro.js provides multicultural pages out-of-the-box. Follow this short guide to learn how to set it up</p>\n',
			contents: []
		}
	},
	meta: {
		last_edited: 1501680325
	}
}