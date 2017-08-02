{
	title: 'Cli',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro.js is meant to be used from the command line. If you are not sure how to use it, just type `enduro --help`. Shout out to [yargs](https://github.com/yargs/yargs) for the command line parser\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488815122_cp.png)\n\n## Popular commands\n\n`$ enduro` - will start enduro in __development__ mode.\n\n`$ enduro start` - will start enduro in __production__ mode.\n\n`$ enduro -r` - norefresh tag. Same as just `enduro` but will not open the browser for the first time. This is useful\n\n`$ enduro addadmin <username> <password>` - will add admin user to the admin interface.\n\n## Running enduro\n\n`$ enduro` - will start enduro in __development__ mode\n\n`$ enduro start` - will start enduro in __production__ mode\n\n## Creating projects\n\n`$ enduro create <projectname>` - will create new folder $$projectname and put the default scaffolding in there\n\n## Securing project\n\n`$ enduro secure <passphrase>` - will create a simple security check for all pages. You know, some clients don\'t like when their half-built website is live and public for everyone to see.\n\n## Building a project\n\n`$ enduro render` - will build sass and requirejs\n\n## Adding cultures\n\n`$ enduro culture add en` - Adds one culture. Check out babel for more info [Babel](/docs/babel)\n\n`$ enduro culture add en de fr` - Adds multiple cultures in one conenient call.\n\n## Juicebox\n__[Juicebox](/docs/juicebox)__ serves as content versioning/migrating/backup tool. __Juicebar__ is the remote server where the backup files are stored.\n\n`$ enduro juice pull` - will download the freshest version of all content files, but will not replace newer local files\n\n`$ enduro juice pull -f` - will download the freshest version of all content files and will replace the local files\n\n`$ enduro juice pack` - will send localfiles to juicebar, but will preserve any newer files from juicebar\n\n`$ enduro juice pack -f` - will just take local files and put them on [juicebox](/docs/juicebox), disregarding any newer file on juicebar\n\n`$ enduro juice diff` - will compare current local content with the remote [juicebox](/docs/juicebox) content\n\n`$ enduro juice diff <version_hash>` - will compare current local content with the specified version\n\n`$ enduro juice diff <version_hash> <file>` - will compare local current file with same file in the specified version\n\n`$ enduro juice log` - displays history of edits to the content\n\n## Upload\n\n`$ enduro upload <image_url>` - downloads image and uploads it to s3.\n\n## Setup\n`enduro setup <command>` is used to ease some of the configuration. If not sure which commands are supported, just run `enduro setup --help`.\n\n`$ enduro setup s3` - will enable aws s3 as filesystem\n`$ enduro setup juicebox` - will turn on/off [juicebox](/docs/juicebox)',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro.js is meant to be used from the command line. If you are not sure how to use it, just type <code>enduro --help</code>. Shout out to <a href="https://github.com/yargs/yargs">yargs</a> for the command line parser</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488815122_cp.png" alt=""></p>\n<h2 id="popular-commands">Popular commands</h2>\n<p><code>$ enduro</code> - will start enduro in <strong>development</strong> mode.</p>\n<p><code>$ enduro start</code> - will start enduro in <strong>production</strong> mode.</p>\n<p><code>$ enduro -r</code> - norefresh tag. Same as just <code>enduro</code> but will not open the browser for the first time. This is useful</p>\n<p><code>$ enduro addadmin &lt;username&gt; &lt;password&gt;</code> - will add admin user to the admin interface.</p>\n<h2 id="running-enduro">Running enduro</h2>\n<p><code>$ enduro</code> - will start enduro in <strong>development</strong> mode</p>\n<p><code>$ enduro start</code> - will start enduro in <strong>production</strong> mode</p>\n<h2 id="creating-projects">Creating projects</h2>\n<p><code>$ enduro create &lt;projectname&gt;</code> - will create new folder <span class="markdown_folder">projectname</span> and put the default scaffolding in there</p>\n<h2 id="securing-project">Securing project</h2>\n<p><code>$ enduro secure &lt;passphrase&gt;</code> - will create a simple security check for all pages. You know, some clients don&#39;t like when their half-built website is live and public for everyone to see.</p>\n<h2 id="building-a-project">Building a project</h2>\n<p><code>$ enduro render</code> - will build sass and requirejs</p>\n<h2 id="adding-cultures">Adding cultures</h2>\n<p><code>$ enduro culture add en</code> - Adds one culture. Check out babel for more info <a href="/docs/babel">Babel</a></p>\n<p><code>$ enduro culture add en de fr</code> - Adds multiple cultures in one conenient call.</p>\n<h2 id="juicebox">Juicebox</h2>\n<p><strong><a href="/docs/juicebox">Juicebox</a></strong> serves as content versioning/migrating/backup tool. <strong>Juicebar</strong> is the remote server where the backup files are stored.</p>\n<p><code>$ enduro juice pull</code> - will download the freshest version of all content files, but will not replace newer local files</p>\n<p><code>$ enduro juice pull -f</code> - will download the freshest version of all content files and will replace the local files</p>\n<p><code>$ enduro juice pack</code> - will send localfiles to juicebar, but will preserve any newer files from juicebar</p>\n<p><code>$ enduro juice pack -f</code> - will just take local files and put them on <a href="/docs/juicebox">juicebox</a>, disregarding any newer file on juicebar</p>\n<p><code>$ enduro juice diff</code> - will compare current local content with the remote <a href="/docs/juicebox">juicebox</a> content</p>\n<p><code>$ enduro juice diff &lt;version_hash&gt;</code> - will compare current local content with the specified version</p>\n<p><code>$ enduro juice diff &lt;version_hash&gt; &lt;file&gt;</code> - will compare local current file with same file in the specified version</p>\n<p><code>$ enduro juice log</code> - displays history of edits to the content</p>\n<h2 id="upload">Upload</h2>\n<p><code>$ enduro upload &lt;image_url&gt;</code> - downloads image and uploads it to s3.</p>\n<h2 id="setup">Setup</h2>\n<p><code>enduro setup &lt;command&gt;</code> is used to ease some of the configuration. If not sure which commands are supported, just run <code>enduro setup --help</code>.</p>\n<p><code>$ enduro setup s3</code> - will enable aws s3 as filesystem\n<code>$ enduro setup juicebox</code> - will turn on/off <a href="/docs/juicebox">juicebox</a></p>\n',
		contents: [
			{
				heading: 'Popular commands',
				level: '2',
				link: 'popular-commands'
			},
			{
				heading: 'Running enduro',
				level: '2',
				link: 'running-enduro'
			},
			{
				heading: 'Creating projects',
				level: '2',
				link: 'creating-projects'
			},
			{
				heading: 'Securing project',
				level: '2',
				link: 'securing-project'
			},
			{
				heading: 'Building a project',
				level: '2',
				link: 'building-a-project'
			},
			{
				heading: 'Adding cultures',
				level: '2',
				link: 'adding-cultures'
			},
			{
				heading: 'Juicebox',
				level: '2',
				link: 'juicebox'
			},
			{
				heading: 'Upload',
				level: '2',
				link: 'upload'
			},
			{
				heading: 'Setup',
				level: '2',
				link: 'setup'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}