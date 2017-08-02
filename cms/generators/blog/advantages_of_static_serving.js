{
	title: 'Static generation vs dynamic serving',
	$date_value: '2017-01-03',
	$date_type: 'date',
	date: 'Tuesday, 03 January, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '> Wouldn\'t it be easier to just build the page once?\n\nLet\'s talk about a website, say a simple blog such as this very page you are reading right now. It has a logo, menu, title, each blog entry has its own title, some images, date of creation and some text. All this content is usually stored in a database and **each time somebody visits**, the server gathers all this content, builds the page and serves it to the visitor.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1483429231_database_queries-min.png)\n\n## What is static serving?\n\nWith enduro.js, the page is built only on content change. When visitors come and request the page it\'s already in a form of a prebuilt .html page and ready to be served.\n\n### Cheaper hosting\nThe static website can be served by a very simple and cheap server, in some cases even for free(such as [github pages](https://pages.github.com/)).\n\n### Blazing speeds\nHaving ready-made .html pages means there is no processing needed to serve the page. It\'s just a matter of requesting a file and sending the file. Moreover, the file can be located on a CDN network for even faster delivery.\n\n### Consistent delivery\nBy not using any of the server\'s resources there is less chance of a lag on the server causing inconsistent delivery times. Random traffic peak can cause many users to have to wait for your page to be delivered.\n\n### Simplicity\nBuilding the page each time somebody requests it allows errors to creep in anytime. When you pre-build the page you know each user will always receive this exact page. Every time.\n\n## Drawbacks\n\nObviously this approach works only for websites that should serve the same thing to all users, such as this one you are reading right now.\n\n* Displaying personalized content is more difficult.\n* Logging in is an absolute no-go with this approach\n* Time-related information such as \'10 minutes ago\' is harder to do.\n\n### Using javascript to fill these use cases\nIn most cases, javascript can be used to add personalized content or content that is dependant on something dynamic. Enduro.js can and is used to make web-apps that load dynamic content after the initial page load, which is still pregenerated. When users can log into a website, using one-page web apps such as gmail is a modern way to approach this anyways.\n\n## enduro.js is not just a static page generator\nEnduro.js is built on top of node.js and [express](http://expressjs.com/). It is absolutely ok and easy to build a dynamic page with enduro. This way, enduro.js allows you to mix static and dynamic pages to achieve maximum efficiency.\n\n## Cache\nMost of the speed penalty dynamic serving causes can be mitigated by using caching. For example, for Wordpress there is a [cache plugin].(https://wordpress.org/plugins/w3-total-cache/). This however adds complexity by having a dynamically built pages and then adding a layer that is trying to save the pages instead of just pre-building the pages in the first place.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485523121_spongebob.jpg)\n\n## Further reading\n\nNoah Veltman explains static vs dynamic serving as a vending machine vs a restaurant. Very clever, read it here: http://noahveltman.com/static-dynamic/',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<blockquote>\n<p>Wouldn&#39;t it be easier to just build the page once?</p>\n</blockquote>\n<p>Let&#39;s talk about a website, say a simple blog such as this very page you are reading right now. It has a logo, menu, title, each blog entry has its own title, some images, date of creation and some text. All this content is usually stored in a database and <strong>each time somebody visits</strong>, the server gathers all this content, builds the page and serves it to the visitor.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1483429231_database_queries-min.png" alt=""></p>\n<h2 id="what-is-static-serving-">What is static serving?</h2>\n<p>With enduro.js, the page is built only on content change. When visitors come and request the page it&#39;s already in a form of a prebuilt .html page and ready to be served.</p>\n<h3 id="cheaper-hosting">Cheaper hosting</h3>\n<p>The static website can be served by a very simple and cheap server, in some cases even for free(such as <a href="https://pages.github.com/">github pages</a>).</p>\n<h3 id="blazing-speeds">Blazing speeds</h3>\n<p>Having ready-made .html pages means there is no processing needed to serve the page. It&#39;s just a matter of requesting a file and sending the file. Moreover, the file can be located on a CDN network for even faster delivery.</p>\n<h3 id="consistent-delivery">Consistent delivery</h3>\n<p>By not using any of the server&#39;s resources there is less chance of a lag on the server causing inconsistent delivery times. Random traffic peak can cause many users to have to wait for your page to be delivered.</p>\n<h3 id="simplicity">Simplicity</h3>\n<p>Building the page each time somebody requests it allows errors to creep in anytime. When you pre-build the page you know each user will always receive this exact page. Every time.</p>\n<h2 id="drawbacks">Drawbacks</h2>\n<p>Obviously this approach works only for websites that should serve the same thing to all users, such as this one you are reading right now.</p>\n<ul>\n<li>Displaying personalized content is more difficult.</li>\n<li>Logging in is an absolute no-go with this approach</li>\n<li>Time-related information such as &#39;10 minutes ago&#39; is harder to do.</li>\n</ul>\n<h3 id="using-javascript-to-fill-these-use-cases">Using javascript to fill these use cases</h3>\n<p>In most cases, javascript can be used to add personalized content or content that is dependant on something dynamic. Enduro.js can and is used to make web-apps that load dynamic content after the initial page load, which is still pregenerated. When users can log into a website, using one-page web apps such as gmail is a modern way to approach this anyways.</p>\n<h2 id="enduro-js-is-not-just-a-static-page-generator">enduro.js is not just a static page generator</h2>\n<p>Enduro.js is built on top of node.js and <a href="http://expressjs.com/">express</a>. It is absolutely ok and easy to build a dynamic page with enduro. This way, enduro.js allows you to mix static and dynamic pages to achieve maximum efficiency.</p>\n<h2 id="cache">Cache</h2>\n<p>Most of the speed penalty dynamic serving causes can be mitigated by using caching. For example, for Wordpress there is a [cache plugin].(<a href="https://wordpress.org/plugins/w3-total-cache/">https://wordpress.org/plugins/w3-total-cache/</a>). This however adds complexity by having a dynamically built pages and then adding a layer that is trying to save the pages instead of just pre-building the pages in the first place.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485523121_spongebob.jpg" alt=""></p>\n<h2 id="further-reading">Further reading</h2>\n<p>Noah Veltman explains static vs dynamic serving as a vending machine vs a restaurant. Very clever, read it here: <a href="http://noahveltman.com/static-dynamic/">http://noahveltman.com/static-dynamic/</a></p>\n',
		contents: [
			{
				heading: 'What is static serving?',
				level: '2',
				link: 'what-is-static-serving-'
			},
			{
				heading: 'Cheaper hosting',
				level: '3',
				link: 'cheaper-hosting'
			},
			{
				heading: 'Blazing speeds',
				level: '3',
				link: 'blazing-speeds'
			},
			{
				heading: 'Consistent delivery',
				level: '3',
				link: 'consistent-delivery'
			},
			{
				heading: 'Simplicity',
				level: '3',
				link: 'simplicity'
			},
			{
				heading: 'Drawbacks',
				level: '2',
				link: 'drawbacks'
			},
			{
				heading: 'Using javascript to fill these use cases',
				level: '3',
				link: 'using-javascript-to-fill-these-use-cases'
			},
			{
				heading: 'enduro.js is not just a static page generator',
				level: '2',
				link: 'enduro-js-is-not-just-a-static-page-generator'
			},
			{
				heading: 'Cache',
				level: '2',
				link: 'cache'
			},
			{
				heading: 'Further reading',
				level: '2',
				link: 'further-reading'
			}
		]
	},
	teaser: {
		doc: 'Let\'s talk about a website, say a simple blog such as this very page you are reading right now. It has a logo, menu, title, each blog entry has its own title, some images, date of creation and some text. All this content is usually stored in a database and **each time somebody visits**, the server gathers all this content, builds the page and serves it to the visitor.',
		$image_type: 'image',
		image: 'https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485523121_spongebob.jpg',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Let&#39;s talk about a website, say a simple blog such as this very page you are reading right now. It has a logo, menu, title, each blog entry has its own title, some images, date of creation and some text. All this content is usually stored in a database and <strong>each time somebody visits</strong>, the server gathers all this content, builds the page and serves it to the visitor.</p>\n',
			contents: []
		}
	},
	meta: {
		last_edited: 1501680325
	}
}