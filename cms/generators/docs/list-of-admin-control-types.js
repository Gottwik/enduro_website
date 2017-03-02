{
	title: 'List of admin control types',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Currently these controls are available in enduro.js by default:\n\n## auto-detected types\n\n### Textfield\n`something: \'text is here\'`\n\nTextfield is the default control.\n\n### Object\n```\nsomething = {\n	something_else: \'\'\n}\n```\n\n### Array\n```\nsomething = [\n	{ label: "first" },\n	{ label: "second" },\n]\n```\nArray control allows to add and remove items\n\n## Set by type termination\n\n### Image\n`$image_type = \'image\'`\n\nWill switch to a convenient image uploading control with drag&drop and copy&paste functionality. If amazon s3 is enabled, the uploaded images go directly to amazon.\n\n### Textarea\n`$text_type = \'textarea\'`\n\nSimply creates a textarea to input longer texts\n\n### Slider\n`$value_type = \'slider\'`\n\nCreates input slider that goes from 0 to 100 by default.\n\n### Colorpicker\n`$color_type = \'colorpicker\'`\n\nCreates colorpicker that outputs hex color code\n\n### Title\n`$title_type = \'title\'`\n\nCreates header out of the property\'s value. Property will be non-editable though',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Currently these controls are available in enduro.js by default:</p>\n<h2 id="auto-detected-types">auto-detected types</h2>\n<h3 id="textfield">Textfield</h3>\n<p><code>something: &#39;text is here&#39;</code></p>\n<p>Textfield is the default control.</p>\n<h3 id="object">Object</h3>\n<pre><code>something = {\n    something_else: &#39;&#39;\n}\n</code></pre><h3 id="array">Array</h3>\n<pre><code>something = [\n    { label: &quot;first&quot; },\n    { label: &quot;second&quot; },\n]\n</code></pre><p>Array control allows to add and remove items</p>\n<h2 id="set-by-type-termination">Set by type termination</h2>\n<h3 id="image">Image</h3>\n<p><code>$image_type = &#39;image&#39;</code></p>\n<p>Will switch to a convenient image uploading control with drag&amp;drop and copy&amp;paste functionality. If amazon s3 is enabled, the uploaded images go directly to amazon.</p>\n<h3 id="textarea">Textarea</h3>\n<p><code>$text_type = &#39;textarea&#39;</code></p>\n<p>Simply creates a textarea to input longer texts</p>\n<h3 id="slider">Slider</h3>\n<p><code>$value_type = &#39;slider&#39;</code></p>\n<p>Creates input slider that goes from 0 to 100 by default.</p>\n<h3 id="colorpicker">Colorpicker</h3>\n<p><code>$color_type = &#39;colorpicker&#39;</code></p>\n<p>Creates colorpicker that outputs hex color code</p>\n<h3 id="title">Title</h3>\n<p><code>$title_type = &#39;title&#39;</code></p>\n<p>Creates header out of the property&#39;s value. Property will be non-editable though</p>\n',
		contents: [
			{
				heading: 'auto-detected types',
				level: '2',
				link: 'auto-detected-types'
			},
			{
				heading: 'Textfield',
				level: '3',
				link: 'textfield'
			},
			{
				heading: 'Object',
				level: '3',
				link: 'object'
			},
			{
				heading: 'Array',
				level: '3',
				link: 'array'
			},
			{
				heading: 'Set by type termination',
				level: '2',
				link: 'set-by-type-termination'
			},
			{
				heading: 'Image',
				level: '3',
				link: 'image'
			},
			{
				heading: 'Textarea',
				level: '3',
				link: 'textarea'
			},
			{
				heading: 'Slider',
				level: '3',
				link: 'slider'
			},
			{
				heading: 'Colorpicker',
				level: '3',
				link: 'colorpicker'
			},
			{
				heading: 'Title',
				level: '3',
				link: 'title'
			}
		]
	}
}