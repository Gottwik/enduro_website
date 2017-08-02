{
	title: 'A/B testing',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '[A/B testing](https://en.wikipedia.org/wiki/A/B_testing) is such important practice that enduro support it out of the box and setting it up could not be any easier.\n\n## Creating A/B variants\nLet\'s say we have a page in the root folder named `contact.hbs`. To create an A/B test variant just duplicate this file and add `@tag` at the end of it\'s name. Another file\'s name could for example be `contact@bigbutton.hbs`.\n\n## Serving files\nThe two files: `contact.hbs` and `contact@bigbutton.hbs` will be served with a 50% chance. You can create as many variants as you want and they will always be served in equal ratio.\n\n## Analyzing results\nYou\'ll have to use third-party tools to analyze which variant is more successful.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1473688687_cp.png)\n\n### Analyzing results with Google analytics\nYou can pass page visit as an event and pass a goal event as another event. See this example:\n\n```\nga(\'send\', \'event\', \'contacttest\', \'visit\', \'smallbutton\')\n\n$(\'button.learn-more\').click(function () {\n	ga(\'send\', \'event\', \'contacttest\', \'goal\', \'smallbutton\')\n})\n```\n\nThis code will register event under name `contacttest` and uses eventValue attribute to differentiate between A/B variants.\n\n## Cookie registration\nFor user interface consistency, users that received variant A will also receive variant A on any subsequent reloads. This is guaranteed by a cookie.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p><a href="https://en.wikipedia.org/wiki/A/B_testing">A/B testing</a> is such important practice that enduro support it out of the box and setting it up could not be any easier.</p>\n<h2 id="creating-a-b-variants">Creating A/B variants</h2>\n<p>Let&#39;s say we have a page in the root folder named <code>contact.hbs</code>. To create an A/B test variant just duplicate this file and add <code>@tag</code> at the end of it&#39;s name. Another file&#39;s name could for example be <code>contact@bigbutton.hbs</code>.</p>\n<h2 id="serving-files">Serving files</h2>\n<p>The two files: <code>contact.hbs</code> and <code>contact@bigbutton.hbs</code> will be served with a 50% chance. You can create as many variants as you want and they will always be served in equal ratio.</p>\n<h2 id="analyzing-results">Analyzing results</h2>\n<p>You&#39;ll have to use third-party tools to analyze which variant is more successful.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1473688687_cp.png" alt=""></p>\n<h3 id="analyzing-results-with-google-analytics">Analyzing results with Google analytics</h3>\n<p>You can pass page visit as an event and pass a goal event as another event. See this example:</p>\n<pre><code>ga(&#39;send&#39;, &#39;event&#39;, &#39;contacttest&#39;, &#39;visit&#39;, &#39;smallbutton&#39;)\n\n$(&#39;button.learn-more&#39;).click(function () {\n    ga(&#39;send&#39;, &#39;event&#39;, &#39;contacttest&#39;, &#39;goal&#39;, &#39;smallbutton&#39;)\n})\n</code></pre><p>This code will register event under name <code>contacttest</code> and uses eventValue attribute to differentiate between A/B variants.</p>\n<h2 id="cookie-registration">Cookie registration</h2>\n<p>For user interface consistency, users that received variant A will also receive variant A on any subsequent reloads. This is guaranteed by a cookie.</p>\n',
		contents: [
			{
				heading: 'Creating A/B variants',
				level: '2',
				link: 'creating-a-b-variants'
			},
			{
				heading: 'Serving files',
				level: '2',
				link: 'serving-files'
			},
			{
				heading: 'Analyzing results',
				level: '2',
				link: 'analyzing-results'
			},
			{
				heading: 'Analyzing results with Google analytics',
				level: '3',
				link: 'analyzing-results-with-google-analytics'
			},
			{
				heading: 'Cookie registration',
				level: '2',
				link: 'cookie-registration'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}