{
	title: 'Deploying with Netlify',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'The awesome [Netlify service](https://app.netlify.com/) is ideal for enduro.js workflow. It is ready to host your enduro.js static website for an unbeatable price (or even for free, check out their [pricing](https://www.netlify.com/pricing/)) and the deployment process could not be easier.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488293175_netlify_feelsgood_horizontal.png)\n\n## Getting ready\n\nYou only need two things for this to work:\n* Enduro.js project (pssst, you can just `enduro theme mirror`)\n* [Netlify cli tools](https://www.netlify.com/docs/#quickstart) (`npm install netlify-cli -g`)\n\n## Deploying your website\n\n### Manual deploy\n\nThis is shockingly easy: Just do `enduro render && netlify deploy -p _generated` and your website is live.\n\nTo break this down:\n* `enduro render` will generate all the static files and stage everything into a $$_generated subfolder.\n* `netlify deploy` will create a new Netlify app\n* `-p _generated` will specify that you will be wanting to upload the $$_generated folder.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488353875_cp.png)\n\n### Doing this properly with Github\n\nNetlify can be linked to a Github repository. This way, Netlify will rebuild the static website each time you update your git repository. This is the proper way to do this.\n\nAll you need to do is initiate `netlify init` command. Notice, that you have to have an origin set up **with ssh**.\n\nWhen the cli process prompts you, just input these values.\n\n| Prompt              	| Value        	|\n|---------------------	|--------------	|\n| Directory to deploy 	| _generated         	|\n| Build command       	| enduro build 	|\n\nThen it just takes about a minute for Netlify to build your website.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488355577_cp.png)\n\n### No cli approach\n\nJust for the sake of providing all options, you can also just drag the $$_generated folder into Netlify web user interface and it will work awesomely. Whatever. It is dead simple and it works.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488356406_cp.png)\n\n\n## Limitations\nNetlify offers purely static hosting. If your project has some api functionality or you\'ve set up some pages to be dynamic you\'ll have to use node.js hosting such as [heroku](http://www.endurojs.com/docs/heroku). With Netlify you won\'t be able to use admin interface to change your website. You\'ll have to use localhost:5000/admin or just change the files manually.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>The awesome <a href="https://app.netlify.com/">Netlify service</a> is ideal for enduro.js workflow. It is ready to host your enduro.js static website for an unbeatable price (or even for free, check out their <a href="https://www.netlify.com/pricing/">pricing</a>) and the deployment process could not be easier.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488293175_netlify_feelsgood_horizontal.png" alt=""></p>\n<h2 id="getting-ready">Getting ready</h2>\n<p>You only need two things for this to work:</p>\n<ul>\n<li>Enduro.js project (pssst, you can just <code>enduro theme mirror</code>)</li>\n<li><a href="https://www.netlify.com/docs/#quickstart">Netlify cli tools</a> (<code>npm install netlify-cli -g</code>)</li>\n</ul>\n<h2 id="deploying-your-website">Deploying your website</h2>\n<h3 id="manual-deploy">Manual deploy</h3>\n<p>This is shockingly easy: Just do <code>enduro render &amp;&amp; netlify deploy -p _generated</code> and your website is live.</p>\n<p>To break this down:</p>\n<ul>\n<li><code>enduro render</code> will generate all the static files and stage everything into a <span class="markdown_folder">_generated</span> subfolder.</li>\n<li><code>netlify deploy</code> will create a new Netlify app</li>\n<li><code>-p _generated</code> will specify that you will be wanting to upload the <span class="markdown_folder">_generated</span> folder.</li>\n</ul>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488353875_cp.png" alt=""></p>\n<h3 id="doing-this-properly-with-github">Doing this properly with Github</h3>\n<p>Netlify can be linked to a Github repository. This way, Netlify will rebuild the static website each time you update your git repository. This is the proper way to do this.</p>\n<p>All you need to do is initiate <code>netlify init</code> command. Notice, that you have to have an origin set up <strong>with ssh</strong>.</p>\n<p>When the cli process prompts you, just input these values.</p>\n<table>\n<thead>\n<tr>\n<th>Prompt</th>\n<th>Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Directory to deploy</td>\n<td>_generated</td>\n</tr>\n<tr>\n<td>Build command</td>\n<td>enduro build</td>\n</tr>\n</tbody>\n</table>\n<p>Then it just takes about a minute for Netlify to build your website.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488355577_cp.png" alt=""></p>\n<h3 id="no-cli-approach">No cli approach</h3>\n<p>Just for the sake of providing all options, you can also just drag the <span class="markdown_folder">_generated</span> folder into Netlify web user interface and it will work awesomely. Whatever. It is dead simple and it works.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488356406_cp.png" alt=""></p>\n<h2 id="limitations">Limitations</h2>\n<p>Netlify offers purely static hosting. If your project has some api functionality or you&#39;ve set up some pages to be dynamic you&#39;ll have to use node.js hosting such as <a href="http://www.endurojs.com/docs/heroku">heroku</a>. With Netlify you won&#39;t be able to use admin interface to change your website. You&#39;ll have to use localhost:5000/admin or just change the files manually.</p>\n',
		contents: [
			{
				heading: 'Getting ready',
				level: '2',
				link: 'getting-ready'
			},
			{
				heading: 'Deploying your website',
				level: '2',
				link: 'deploying-your-website'
			},
			{
				heading: 'Manual deploy',
				level: '3',
				link: 'manual-deploy'
			},
			{
				heading: 'Doing this properly with Github',
				level: '3',
				link: 'doing-this-properly-with-github'
			},
			{
				heading: 'No cli approach',
				level: '3',
				link: 'no-cli-approach'
			},
			{
				heading: 'Limitations',
				level: '2',
				link: 'limitations'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}