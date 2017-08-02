{
	title: 'Helper - Grouped each',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '`@!helper` `@!block helper` `@!templates`\n\n`grouped_each` helper provides way to split long array into smaller arrays of specified length.\n\n## Usage\n`{{#grouped_each :size_of_chunks :context}}`\n\n## Use case\ngrouped_each comes handy when you have a list of, say, 30 items and you want to display them 3 at a time. grouped_each will split the list of 30 items into 10 lists of 3 items and provides each list of 3 items as `{{this}}`.\n\n```html\n{{#grouped_each 3 global.documentation_list}}\n	{{#each this}}\n		<div class="col-md-4">\n			columns\n		</div>\n	{{/each}}\n		<div class="wedge"></div>\n{{/grouped_each}}\n```\n\n## Shout out\nThanks @Timothy Robertson of https://funkjedi.com/technology/412-every-nth-item-in-handlebars/ for providing the idea and base implementation.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p><code>@!helper</code> <code>@!block helper</code> <code>@!templates</code></p>\n<p><code>grouped_each</code> helper provides way to split long array into smaller arrays of specified length.</p>\n<h2 id="usage">Usage</h2>\n<p><code>{{#grouped_each :size_of_chunks :context}}</code></p>\n<h2 id="use-case">Use case</h2>\n<p>grouped_each comes handy when you have a list of, say, 30 items and you want to display them 3 at a time. grouped_each will split the list of 30 items into 10 lists of 3 items and provides each list of 3 items as <code>{{this}}</code>.</p>\n<pre><code class="lang-html">{{#grouped_each 3 global.documentation_list}}\n    {{#each this}}\n        &lt;div class=&quot;col-md-4&quot;&gt;\n            columns\n        &lt;/div&gt;\n    {{/each}}\n        &lt;div class=&quot;wedge&quot;&gt;&lt;/div&gt;\n{{/grouped_each}}\n</code></pre>\n<h2 id="shout-out">Shout out</h2>\n<p>Thanks @Timothy Robertson of <a href="https://funkjedi.com/technology/412-every-nth-item-in-handlebars/">https://funkjedi.com/technology/412-every-nth-item-in-handlebars/</a> for providing the idea and base implementation.</p>\n',
		contents: [
			{
				heading: 'Usage',
				level: '2',
				link: 'usage'
			},
			{
				heading: 'Use case',
				level: '2',
				link: 'use-case'
			},
			{
				heading: 'Shout out',
				level: '2',
				link: 'shout-out'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}