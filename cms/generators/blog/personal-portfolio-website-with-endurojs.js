{
	title: 'Personal portfolio website with endurojs',
	$date_value: '2017-02-24',
	$date_type: 'date',
	date: 'Friday, 24 February, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950080_themes_intro.jpg)\n\n>Whether you are a freelancer, photographer or maybe just looking for job, having a personal portfolio website can\'t hurt, can it? I will try to walk you through creating your own personal portfolio in under **5 minutes**. No javascript/html/css knowledge necessary!\n\n## Prerequisites\nYou have to have [node.js installed](https://nodejs.org/en/download/) with enduro.js installed globally (just run `npm i enduro -g`).\n\n## Creating new project\nNext up, we are going to create a new project from an **mirror** theme. Open up your terminal window, cd into the directory where you would want your project to be stored in and run:\n\n```bash\n$ enduro theme mirror\n```\n\nYou will be asked to provide a name for your portfolio as well as a admin login username and password.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950357_theme_cli_screenshot.png)\n\nOnce your project is created, a browser window opens automatically! To edit content just click the **edit this page** button.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950530_cp.png)\n\n## Access admin interface\nClicking the **edit this page** button will open the enduro.js admin interface. Just login with the credentials you\'ve put in previously in the terminal window.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950755_cp.png)\n\n## Changing content\nUsing the admin interface is quite self-explanatory. You can copy-paste images by clicking the image or just putting public links to the images by clicking the link icon. You\'ll get it.\n\n## Publishing your website\nIf you open the folder where you created this project just find a $$/_generated folder. Just upload this whole folder somewhere and your website is online!\n\n![](https://www.netlify.com/img/press/logos/full-logo-light.svg)\n\n### Publishing your portfolio with Netlify\n\nNetlify offers probably the simplest way to get your portfolio online. Good news is that the **mirror** theme comes preconfigured to work with Netlify out of the box. Just install netlify cli by running `npm install netlify-cli -g`. After that all you need to do is `enduro render && netlify deploy -p _generated`. You can also hook it up to a GitHub repository - read more about this in the [docs](/docs/netlify).\n\n### Publish your portfolio on Github pages\n[Github pages](https://pages.github.com/) offers a free way to host your static page. For this to work you have to put the generated files in a `gh-pages` branch.\n\nYou can just use github\'s website user interface to upload the files from the $$/_generated folder. Other option is to use git to get this done. Follow this instructions to get your enduro.js generated personal portfolio online with Github pages:\n\n1. [Sign up](https://github.com/join) for a free Github account if you don\'t already have one\n2. Create new repository on github.com and copy its **.git** link\n3. Use the terminal to **cd into the project\'s folder** and do `git init`, `git add .` and `git commit -m \'first commit\'`\n4. Link your folder with Github\'s repository by running `git remote add origin <.git link you got from github>`\n5. Put the files on Github by running `git push --set-upstream origin master`\n6. Now all the source files are on Github, but we need to push the **generated files** into a separate branch named **gh-pages**, which Github recognizes and serves as a static page.\n7. `git checkout -b gh-pages`\n7. `git add -f _generated`\n7. `git commit -m \'publishing gh pages\'`\n7. `git push --set-upstream origin gh-pages`\n8. `git push origin $(git subtree split --prefix _generated):gh-pages --force`\n\nIf everything went well, your portfolio should be live at **https://<your_github_username>.github.io/<project_name>/**',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950080_themes_intro.jpg" alt=""></p>\n<blockquote>\n<p>Whether you are a freelancer, photographer or maybe just looking for job, having a personal portfolio website can&#39;t hurt, can it? I will try to walk you through creating your own personal portfolio in under <strong>5 minutes</strong>. No javascript/html/css knowledge necessary!</p>\n</blockquote>\n<h2 id="prerequisites">Prerequisites</h2>\n<p>You have to have <a href="https://nodejs.org/en/download/">node.js installed</a> with enduro.js installed globally (just run <code>npm i enduro -g</code>).</p>\n<h2 id="creating-new-project">Creating new project</h2>\n<p>Next up, we are going to create a new project from an <strong>mirror</strong> theme. Open up your terminal window, cd into the directory where you would want your project to be stored in and run:</p>\n<pre><code class="lang-bash">$ enduro theme mirror\n</code></pre>\n<p>You will be asked to provide a name for your portfolio as well as a admin login username and password.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950357_theme_cli_screenshot.png" alt=""></p>\n<p>Once your project is created, a browser window opens automatically! To edit content just click the <strong>edit this page</strong> button.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950530_cp.png" alt=""></p>\n<h2 id="access-admin-interface">Access admin interface</h2>\n<p>Clicking the <strong>edit this page</strong> button will open the enduro.js admin interface. Just login with the credentials you&#39;ve put in previously in the terminal window.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1487950755_cp.png" alt=""></p>\n<h2 id="changing-content">Changing content</h2>\n<p>Using the admin interface is quite self-explanatory. You can copy-paste images by clicking the image or just putting public links to the images by clicking the link icon. You&#39;ll get it.</p>\n<h2 id="publishing-your-website">Publishing your website</h2>\n<p>If you open the folder where you created this project just find a <span class="markdown_folder">/_generated</span> folder. Just upload this whole folder somewhere and your website is online!</p>\n<p><img src="https://www.netlify.com/img/press/logos/full-logo-light.svg" alt=""></p>\n<h3 id="publishing-your-portfolio-with-netlify">Publishing your portfolio with Netlify</h3>\n<p>Netlify offers probably the simplest way to get your portfolio online. Good news is that the <strong>mirror</strong> theme comes preconfigured to work with Netlify out of the box. Just install netlify cli by running <code>npm install netlify-cli -g</code>. After that all you need to do is <code>enduro render &amp;&amp; netlify deploy -p _generated</code>. You can also hook it up to a GitHub repository - read more about this in the <a href="/docs/netlify">docs</a>.</p>\n<h3 id="publish-your-portfolio-on-github-pages">Publish your portfolio on Github pages</h3>\n<p><a href="https://pages.github.com/">Github pages</a> offers a free way to host your static page. For this to work you have to put the generated files in a <code>gh-pages</code> branch.</p>\n<p>You can just use github&#39;s website user interface to upload the files from the <span class="markdown_folder">/_generated</span> folder. Other option is to use git to get this done. Follow this instructions to get your enduro.js generated personal portfolio online with Github pages:</p>\n<ol>\n<li><a href="https://github.com/join">Sign up</a> for a free Github account if you don&#39;t already have one</li>\n<li>Create new repository on github.com and copy its <strong>.git</strong> link</li>\n<li>Use the terminal to <strong>cd into the project&#39;s folder</strong> and do <code>git init</code>, <code>git add .</code> and <code>git commit -m &#39;first commit&#39;</code></li>\n<li>Link your folder with Github&#39;s repository by running <code>git remote add origin &lt;.git link you got from github&gt;</code></li>\n<li>Put the files on Github by running <code>git push --set-upstream origin master</code></li>\n<li>Now all the source files are on Github, but we need to push the <strong>generated files</strong> into a separate branch named <strong>gh-pages</strong>, which Github recognizes and serves as a static page.</li>\n<li><code>git checkout -b gh-pages</code></li>\n<li><code>git add -f _generated</code></li>\n<li><code>git commit -m &#39;publishing gh pages&#39;</code></li>\n<li><code>git push --set-upstream origin gh-pages</code></li>\n<li><code>git push origin $(git subtree split --prefix _generated):gh-pages --force</code></li>\n</ol>\n<p>If everything went well, your portfolio should be live at <strong>https://&lt;your_github_username&gt;.github.io/&lt;project_name&gt;/</strong></p>\n',
		contents: [
			{
				heading: 'Prerequisites',
				level: '2',
				link: 'prerequisites'
			},
			{
				heading: 'Creating new project',
				level: '2',
				link: 'creating-new-project'
			},
			{
				heading: 'Access admin interface',
				level: '2',
				link: 'access-admin-interface'
			},
			{
				heading: 'Changing content',
				level: '2',
				link: 'changing-content'
			},
			{
				heading: 'Publishing your website',
				level: '2',
				link: 'publishing-your-website'
			},
			{
				heading: 'Publishing your portfolio with Netlify',
				level: '3',
				link: 'publishing-your-portfolio-with-netlify'
			},
			{
				heading: 'Publish your portfolio on Github pages',
				level: '3',
				link: 'publish-your-portfolio-on-github-pages'
			}
		]
	},
	teaser: {
		doc: 'Whether you are a freelancer, photographer or maybe just looking for job, having a personal portfolio website can\'t hurt, can it? I will try to walk you through creating your own personal portfolio in under **5 minutes**. No javascript/html/css knowledge necessary!',
		$image_type: 'image',
		image: 'https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488182689_7be3lfd7wegucxj62yb9.png',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Whether you are a freelancer, photographer or maybe just looking for job, having a personal portfolio website can&#39;t hurt, can it? I will try to walk you through creating your own personal portfolio in under <strong>5 minutes</strong>. No javascript/html/css knowledge necessary!</p>\n',
			contents: []
		}
	},
	meta: {
		last_edited: 1501680325
	}
}