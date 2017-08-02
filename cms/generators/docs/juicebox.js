{
	title: 'Juicebox',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Juicebox provides versioning/backup for enduro.js projects. It\'s optional to use, but if you decide to host your project on infrastructure without a persistent file storage(such as (heroku)[/docs/heroku]), juicebox in combination with a remote filesystem is necessary to store all your cms content.\n\n## Setting up juicebox\nAll you need to do is run `enduro setup juicebox` and confirm enabling of the juicebox. Under the hood, this just sets *juicebox_enabled* variable in $$/enduro.json to true.\n\nEnduro.js juicebox is now enabled. Your content files are versioned and backed up in the $$/remote/juicebox folder\n\n## Remote Filesystem\nJuicebox makes a lot of sense when hosting the page on an infrastructure without persistent file-system, such as heroku. To enable using aws s3 as filesystem, just use `enduro setup s3` and input keys, bucket name and preferred region.\n\nUnder the hood, this just sets keys to $$/enduro_secret.json file.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474018780_cp.png)\n\nAnd bucket and region into the $$/enduro.json file.\n```\n{\n	"project_name": "Cool project",\n	"project_slug": "cp",\n	"s3": {\n		"bucket": "your.bucketname",\n		"region": "eu-west-1"\n	}\n}\n```\n\n## Cli tools\n\n### Fetching changes\n`$ enduro juice pull` will fetch all the changes from server. Only the files will be replaced. Similar to `git commit`.\n\n`$ enduro juice pull -f` will replace local content structure will remote, overwriting newer files which files are newer.\n\n### Pushing changes\n`$ enduro juice pack` will first pull the newer files and then send the newer local files to juicebox.\n\n`$ enduro juice pack -f` will replace remote content structure with local one even if remote is newer.\n\n### Querying status\n`$ enduro juice log` displays history of most recent edits\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019471_cp.png)\n\n`$ enduro juice diff` compares local content structure with remote one.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019572_cp.png)\n\n`$ enduro juice diff :hash` will compare specified version with the local version.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019670_cp.png)\n\n`$ enduro juice diff :hash :file` - will display diff between specified file in specified version.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019851_cp.png)\n\n## How juicebox works internally\nEnduro.js uses flat-file database stored in local file system for content. This works great, it\'s fast, simple and lightweight. However the problem is when you want to run your project in cloud-like environment like Heroku, which does not have persistent file-storage. For this purpose, enduro.js uses a remote file-system through the use of juicebox. Still flat-file, still simple, still fast. On top of this there is a versioning functionality and you can run multiple instances of your project and enduro.js will still work nicely and the content will be beautifully synced.\n\nOn each `$ enduro juice pack` or press of a \'publish\' button, enduro.js tarballs and gzips all the content files. These files are just text files, so they tend to be quite compressible and small. This compressed archive file is sent to remote file-system, alongside updating juice.json in the same place. This way, all your content is securely backed up and never overwritten.\n\nOn `$ enduro juice pull` or press of a update button, enduro.js downloads the juice.json file, finds out which archive is the latest, downloads it and if it has newer files, overwrites the local files.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Juicebox provides versioning/backup for enduro.js projects. It&#39;s optional to use, but if you decide to host your project on infrastructure without a persistent file storage(such as (heroku)[/docs/heroku]), juicebox in combination with a remote filesystem is necessary to store all your cms content.</p>\n<h2 id="setting-up-juicebox">Setting up juicebox</h2>\n<p>All you need to do is run <code>enduro setup juicebox</code> and confirm enabling of the juicebox. Under the hood, this just sets <em>juicebox_enabled</em> variable in <span class="markdown_folder">/enduro.json</span> to true.</p>\n<p>Enduro.js juicebox is now enabled. Your content files are versioned and backed up in the <span class="markdown_folder">/remote/juicebox</span> folder</p>\n<h2 id="remote-filesystem">Remote Filesystem</h2>\n<p>Juicebox makes a lot of sense when hosting the page on an infrastructure without persistent file-system, such as heroku. To enable using aws s3 as filesystem, just use <code>enduro setup s3</code> and input keys, bucket name and preferred region.</p>\n<p>Under the hood, this just sets keys to <span class="markdown_folder">/enduro_secret.json</span> file.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474018780_cp.png" alt=""></p>\n<p>And bucket and region into the <span class="markdown_folder">/enduro.json</span> file.</p>\n<pre><code>{\n    &quot;project_name&quot;: &quot;Cool project&quot;,\n    &quot;project_slug&quot;: &quot;cp&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;your.bucketname&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;\n    }\n}\n</code></pre><h2 id="cli-tools">Cli tools</h2>\n<h3 id="fetching-changes">Fetching changes</h3>\n<p><code>$ enduro juice pull</code> will fetch all the changes from server. Only the files will be replaced. Similar to <code>git commit</code>.</p>\n<p><code>$ enduro juice pull -f</code> will replace local content structure will remote, overwriting newer files which files are newer.</p>\n<h3 id="pushing-changes">Pushing changes</h3>\n<p><code>$ enduro juice pack</code> will first pull the newer files and then send the newer local files to juicebox.</p>\n<p><code>$ enduro juice pack -f</code> will replace remote content structure with local one even if remote is newer.</p>\n<h3 id="querying-status">Querying status</h3>\n<p><code>$ enduro juice log</code> displays history of most recent edits</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019471_cp.png" alt=""></p>\n<p><code>$ enduro juice diff</code> compares local content structure with remote one.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019572_cp.png" alt=""></p>\n<p><code>$ enduro juice diff :hash</code> will compare specified version with the local version.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019670_cp.png" alt=""></p>\n<p><code>$ enduro juice diff :hash :file</code> - will display diff between specified file in specified version.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1474019851_cp.png" alt=""></p>\n<h2 id="how-juicebox-works-internally">How juicebox works internally</h2>\n<p>Enduro.js uses flat-file database stored in local file system for content. This works great, it&#39;s fast, simple and lightweight. However the problem is when you want to run your project in cloud-like environment like Heroku, which does not have persistent file-storage. For this purpose, enduro.js uses a remote file-system through the use of juicebox. Still flat-file, still simple, still fast. On top of this there is a versioning functionality and you can run multiple instances of your project and enduro.js will still work nicely and the content will be beautifully synced.</p>\n<p>On each <code>$ enduro juice pack</code> or press of a &#39;publish&#39; button, enduro.js tarballs and gzips all the content files. These files are just text files, so they tend to be quite compressible and small. This compressed archive file is sent to remote file-system, alongside updating juice.json in the same place. This way, all your content is securely backed up and never overwritten.</p>\n<p>On <code>$ enduro juice pull</code> or press of a update button, enduro.js downloads the juice.json file, finds out which archive is the latest, downloads it and if it has newer files, overwrites the local files.</p>\n',
		contents: [
			{
				heading: 'Setting up juicebox',
				level: '2',
				link: 'setting-up-juicebox'
			},
			{
				heading: 'Remote Filesystem',
				level: '2',
				link: 'remote-filesystem'
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
	},
	meta: {
		last_edited: 1501680325
	}
}