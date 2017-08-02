{
	title: 'Enduro themes',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro.js themes are the best way to get you up and running as fast as possible. They are also great first contact to enduro.js since you get to see the finished product, which you can then just tweak to your liking.\n\nTo see which themes are available, just visit [Theme manager homepage](/themes).\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487880073_themes_intro.jpg)\n\n## Getting started with enduro.js themes\nFirst you have to make sure you have node.js installed on your machine. Second prerequisite is having enduro.js installed globally (just run `npm i enduro -g`).\n\n## Create a project out of a theme\nTo start just run:\n\n```bash\n$ enduro theme mirror\n```\n\nThis will find a **mirror** theme, download it, install its npm and bower dependencies and start enduro.js. Then you can just go to localhost:5000/admin to put in your content and make finished website\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487936465_theme_cli_screenshot.png)\n\n## How to deploy your page\nOnce you fill you content there are two ways you can make the page accessible:\n\n### Static hosting\nenduro.js [pregenerates static html files](/docs/static-pages), which you can just upload to a server and serve statically. No node.js required. Some providers even allows you to host a static page for free - check out [github pages](https://pages.github.com/)\n\n### Node.js dynamic hosting\nThis will run enduro on a server and provide you with same admin functionality as if you were using localhost. I suggest you use heroku for this [Heroku](/docs/heroku). It\'s affordable and easy to use.\n\n## Creating enduro.js themes\nenduro.js theme is just an enduro.js project made in a general enough way so it can be used by other people just by changing the content. Everybody is more than welcome to contribute by creating a pull request to [Github repository](https://github.com/Gottwik/enduro_website/blob/master/cms/global/theme_manager/themes.js) of this website. The file is quite self-explanatory.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro.js themes are the best way to get you up and running as fast as possible. They are also great first contact to enduro.js since you get to see the finished product, which you can then just tweak to your liking.</p>\n<p>To see which themes are available, just visit <a href="/themes">Theme manager homepage</a>.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487880073_themes_intro.jpg" alt=""></p>\n<h2 id="getting-started-with-enduro-js-themes">Getting started with enduro.js themes</h2>\n<p>First you have to make sure you have node.js installed on your machine. Second prerequisite is having enduro.js installed globally (just run <code>npm i enduro -g</code>).</p>\n<h2 id="create-a-project-out-of-a-theme">Create a project out of a theme</h2>\n<p>To start just run:</p>\n<pre><code class="lang-bash">$ enduro theme mirror\n</code></pre>\n<p>This will find a <strong>mirror</strong> theme, download it, install its npm and bower dependencies and start enduro.js. Then you can just go to localhost:5000/admin to put in your content and make finished website</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487936465_theme_cli_screenshot.png" alt=""></p>\n<h2 id="how-to-deploy-your-page">How to deploy your page</h2>\n<p>Once you fill you content there are two ways you can make the page accessible:</p>\n<h3 id="static-hosting">Static hosting</h3>\n<p>enduro.js <a href="/docs/static-pages">pregenerates static html files</a>, which you can just upload to a server and serve statically. No node.js required. Some providers even allows you to host a static page for free - check out <a href="https://pages.github.com/">github pages</a></p>\n<h3 id="node-js-dynamic-hosting">Node.js dynamic hosting</h3>\n<p>This will run enduro on a server and provide you with same admin functionality as if you were using localhost. I suggest you use heroku for this <a href="/docs/heroku">Heroku</a>. It&#39;s affordable and easy to use.</p>\n<h2 id="creating-enduro-js-themes">Creating enduro.js themes</h2>\n<p>enduro.js theme is just an enduro.js project made in a general enough way so it can be used by other people just by changing the content. Everybody is more than welcome to contribute by creating a pull request to <a href="https://github.com/Gottwik/enduro_website/blob/master/cms/global/theme_manager/themes.js">Github repository</a> of this website. The file is quite self-explanatory.</p>\n',
		contents: [
			{
				heading: 'Getting started with enduro.js themes',
				level: '2',
				link: 'getting-started-with-enduro-js-themes'
			},
			{
				heading: 'Create a project out of a theme',
				level: '2',
				link: 'create-a-project-out-of-a-theme'
			},
			{
				heading: 'How to deploy your page',
				level: '2',
				link: 'how-to-deploy-your-page'
			},
			{
				heading: 'Static hosting',
				level: '3',
				link: 'static-hosting'
			},
			{
				heading: 'Node.js dynamic hosting',
				level: '3',
				link: 'node-js-dynamic-hosting'
			},
			{
				heading: 'Creating enduro.js themes',
				level: '2',
				link: 'creating-enduro-js-themes'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}