{
	title: 'Event hooks',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'events hooks allows for external commands to be executed upon specific enduro.js\' action. Commands are specified in the $$/enduro.json file.\n\n## List of events\nCurrently only **post_update** hook is enabled.\n\n## Example\nthe post_update event below copies the $$/_generated directory into a $$../eventcopy directory.\n\n```json\n{\n	"project_name": "set name here",\n	"project_slug": "sn",\n	"s3": {\n		"bucket": "enduro.sethere",\n		"region": "eu-west-1"\n	},\n	"juicebox_enabled": false,\n	"events": {\n		"post_update": "cp -R _generated/. ../eventcopy"\n	}\n}\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>events hooks allows for external commands to be executed upon specific enduro.js&#39; action. Commands are specified in the <span class="markdown_folder">/enduro.json</span> file.</p>\n<h2 id="list-of-events">List of events</h2>\n<p>Currently only <strong>post_update</strong> hook is enabled.</p>\n<h2 id="example">Example</h2>\n<p>the post_update event below copies the <span class="markdown_folder">/_generated</span> directory into a <span class="markdown_folder">../eventcopy</span> directory.</p>\n<pre><code class="lang-json">{\n    &quot;project_name&quot;: &quot;set name here&quot;,\n    &quot;project_slug&quot;: &quot;sn&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;enduro.sethere&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;\n    },\n    &quot;juicebox_enabled&quot;: false,\n    &quot;events&quot;: {\n        &quot;post_update&quot;: &quot;cp -R _generated/. ../eventcopy&quot;\n    }\n}\n</code></pre>\n',
		contents: [
			{
				heading: 'List of events',
				level: '2',
				link: 'list-of-events'
			},
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