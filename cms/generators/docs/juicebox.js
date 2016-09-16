{
	title: 'Juicebox',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Juicebox serves as a remote flat-file database for enduro. It\'s optional to use, you can just use the local storage if it is available and persistent. In a sense it is similar to git.\n\n## Setting up juicebox\nTo use juicebox you have to link aws s3 bucket to your project. To do this you have to put your api and secret keys to `@@/enduro_secret.json`: \n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474018780_cp.png)\n\nAdditionaly you have to fill project information in the `@@/enduro.json`. Especially the s3 section.\n```\n{\n	"project_name": "Cool project",\n	"project_slug": "cp",\n	"s3": {\n		"bucket": "your.bucketname",\n		"region": "eu-west-1"\n	}\n}\n```\n\nEnduro.js juicebox is set up now. Your content files are versioned, backed up and your images go directly into the specified s3 bucket.\n\n## Cli tools\n\n### Fetching changes\n`$ enduro juice pull` will fetch all the changes from server. Only the files will be replaced. Similar to `git commit`.\n\n`$ enduro juice pull -f` will replace local content structure will remote, overwriting newer files which files are newer.\n\n### Pushing changes\n`$ enduro juice pack` will first pull the newer files and then send the newer local files to juicebox. Similar to `git add . && git commit -m \'\' && git push`\n\n`$ enduro juice pack -f` will replace remote content structure with local one even if remote is newer.\n\n### Querying status\n`$ enduro juice log` displays history of most recent edits\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019471_cp.png)\n\n`$ enduro juice diff` compares local content structure with remote one.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019572_cp.png)\n\n`$ enduro juice diff :hash` will compare specified version with the local version. Hash can be retrieved from running `$ enduro juice log`\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019670_cp.png)\n\n`$ enduro juice diff :hash :file` - will display diff between specified file in specified version.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019851_cp.png)\n\n## How juicebox works internally\nEnduro.js uses flat-file database stored in local file system for content. This works great, it\'s fast, simple and lightweight. However the problem is when you want to run your project in cloud-like environment like Heroku, which does not have persistent file storage. For this purpose, enduro.js basically uses amazon\'s s3 as a persistent file storage. Still flat-file, still simple, still fast. On top of this there is a versioning functionality built on top and you can run multiple instances of your project(multiple dynos) and enduro.js will still work nicely.\n\nOn each `$ enduro juice pack` or press of a \'publish\' button, enduro.js tarballs and gzips all the content files. These files are just text, so they tend to be quite compressible and small. This compressed archive file is sent to s3 bucket, alongside updating juice.json in the same bucket. This way all your content is securely backed up and never overwritten.\n\nOn `$ enduro juice pull` or press of a update button, enduro.js gets the juice.json file, checks which archive is the latest, downloads it and if it has newer files, overwrites the local files.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Juicebox serves as a remote flat-file database for enduro. It&#39;s optional to use, you can just use the local storage if it is available and persistent. In a sense it is similar to git.</p>\n<h2 id="setting-up-juicebox">Setting up juicebox</h2>\n<p>To use juicebox you have to link aws s3 bucket to your project. To do this you have to put your api and secret keys to <code>@@/enduro_secret.json</code>: </p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474018780_cp.png" alt=""></p>\n<p>Additionaly you have to fill project information in the <code>@@/enduro.json</code>. Especially the s3 section.</p>\n<pre><code>{\n    &quot;project_name&quot;: &quot;Cool project&quot;,\n    &quot;project_slug&quot;: &quot;cp&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;your.bucketname&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;\n    }\n}\n</code></pre><p>Enduro.js juicebox is set up now. Your content files are versioned, backed up and your images go directly into the specified s3 bucket.</p>\n<h2 id="cli-tools">Cli tools</h2>\n<h3 id="fetching-changes">Fetching changes</h3>\n<p><code>$ enduro juice pull</code> will fetch all the changes from server. Only the files will be replaced. Similar to <code>git commit</code>.</p>\n<p><code>$ enduro juice pull -f</code> will replace local content structure will remote, overwriting newer files which files are newer.</p>\n<h3 id="pushing-changes">Pushing changes</h3>\n<p><code>$ enduro juice pack</code> will first pull the newer files and then send the newer local files to juicebox. Similar to <code>git add . &amp;&amp; git commit -m &#39;&#39; &amp;&amp; git push</code></p>\n<p><code>$ enduro juice pack -f</code> will replace remote content structure with local one even if remote is newer.</p>\n<h3 id="querying-status">Querying status</h3>\n<p><code>$ enduro juice log</code> displays history of most recent edits</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019471_cp.png" alt=""></p>\n<p><code>$ enduro juice diff</code> compares local content structure with remote one.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019572_cp.png" alt=""></p>\n<p><code>$ enduro juice diff :hash</code> will compare specified version with the local version. Hash can be retrieved from running <code>$ enduro juice log</code></p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019670_cp.png" alt=""></p>\n<p><code>$ enduro juice diff :hash :file</code> - will display diff between specified file in specified version.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019851_cp.png" alt=""></p>\n<h2 id="how-juicebox-works-internally">How juicebox works internally</h2>\n<p>Enduro.js uses flat-file database stored in local file system for content. This works great, it&#39;s fast, simple and lightweight. However the problem is when you want to run your project in cloud-like environment like Heroku, which does not have persistent file storage. For this purpose, enduro.js basically uses amazon&#39;s s3 as a persistent file storage. Still flat-file, still simple, still fast. On top of this there is a versioning functionality built on top and you can run multiple instances of your project(multiple dynos) and enduro.js will still work nicely.</p>\n<p>On each <code>$ enduro juice pack</code> or press of a &#39;publish&#39; button, enduro.js tarballs and gzips all the content files. These files are just text, so they tend to be quite compressible and small. This compressed archive file is sent to s3 bucket, alongside updating juice.json in the same bucket. This way all your content is securely backed up and never overwritten.</p>\n<p>On <code>$ enduro juice pull</code> or press of a update button, enduro.js gets the juice.json file, checks which archive is the latest, downloads it and if it has newer files, overwrites the local files.</p>\n',
		contents: [
			{
				heading: 'Setting up juicebox',
				level: '2',
				link: 'setting-up-juicebox'
			},
			{
				heading: 'Cli tools',
				level: '2',
				link: 'cli-tools'
			},
			{
				heading: 'Fetching changes',
				level: '3',
				link: 'fetching-changes'
			},
			{
				heading: 'Pushing changes',
				level: '3',
				link: 'pushing-changes'
			},
			{
				heading: 'Querying status',
				level: '3',
				link: 'querying-status'
			},
			{
				heading: 'How juicebox works internally',
				level: '2',
				link: 'how-juicebox-works-internally'
			}
		]
	}
}