{
	title: 'List of admin control types',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '## What are control types?\nWell, as you might already know, enduro provides a sweet admin ui. Control types are a way for you to tell enduro what value to expect. For example, there is a date control, which offer user an enhanced experience when a date is expected.\n\nCurrently these controls are available in enduro by default:\n\n## auto-detected types\n\n### Textfield\n`something: \'text is here\'`\n\nTextfield is the default control.\n\n### Object\n```\nsomething : {\n	something_else: \'\'\n}\n```\n\n### Array\n```\nsomething : [\n	{ label: "first" },\n	{ label: "second" },\n]\n```\nArray control allows to add and remove items\n\n## Set by type termination\n\n### Image\n`$image_type : \'image\'`\n\nNice, full-featured image uploading control will let you drag in, copy/paste or just browse for an image. Fully compatible with your choice of remote file storage(such as aws s3).\n\n### File\n`$resume_type : \'file\'`\n\nSimple file uploading control that lets you drag and drop files.\n\n### Textarea\n`$text_type : \'textarea\'`\n\nSimply textarea to input longer blocks of text.\n\n### Slider\n`$value_type : \'slider\'`\n\nCreates input slider that goes from 0 to 100 by default.\n\n### Colorpicker\n`$color_type : \'colorpicker\'`\n\nStandard browser\'s colorpicker that outputs hex color code.\n\n### Title\n`$title_type : \'title\'`\n\nCreates header out of the property\'s value. Property will be non-editable though\n\n### Date\n`$published_on_type : \'date\'`\n\nCreates datepicker.\n\n### Time\n`$foo_time_type : \'time\'`\n\nCreates time selection dropdown.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<h2 id="what-are-control-types-">What are control types?</h2>\n<p>Well, as you might already know, enduro provides a sweet admin ui. Control types are a way for you to tell enduro what value to expect. For example, there is a date control, which offer user an enhanced experience when a date is expected.</p>\n<p>Currently these controls are available in enduro by default:</p>\n<h2 id="auto-detected-types">auto-detected types</h2>\n<h3 id="textfield">Textfield</h3>\n<p><code>something: &#39;text is here&#39;</code></p>\n<p>Textfield is the default control.</p>\n<h3 id="object">Object</h3>\n<pre><code>something : {\n    something_else: &#39;&#39;\n}\n</code></pre><h3 id="array">Array</h3>\n<pre><code>something : [\n    { label: &quot;first&quot; },\n    { label: &quot;second&quot; },\n]\n</code></pre><p>Array control allows to add and remove items</p>\n<h2 id="set-by-type-termination">Set by type termination</h2>\n<h3 id="image">Image</h3>\n<p><code>$image_type : &#39;image&#39;</code></p>\n<p>Nice, full-featured image uploading control will let you drag in, copy/paste or just browse for an image. Fully compatible with your choice of remote file storage(such as aws s3).</p>\n<h3 id="file">File</h3>\n<p><code>$resume_type : &#39;file&#39;</code></p>\n<p>Simple file uploading control that lets you drag and drop files.</p>\n<h3 id="textarea">Textarea</h3>\n<p><code>$text_type : &#39;textarea&#39;</code></p>\n<p>Simply textarea to input longer blocks of text.</p>\n<h3 id="slider">Slider</h3>\n<p><code>$value_type : &#39;slider&#39;</code></p>\n<p>Creates input slider that goes from 0 to 100 by default.</p>\n<h3 id="colorpicker">Colorpicker</h3>\n<p><code>$color_type : &#39;colorpicker&#39;</code></p>\n<p>Standard browser&#39;s colorpicker that outputs hex color code.</p>\n<h3 id="title">Title</h3>\n<p><code>$title_type : &#39;title&#39;</code></p>\n<p>Creates header out of the property&#39;s value. Property will be non-editable though</p>\n<h3 id="date">Date</h3>\n<p><code>$published_on_type : &#39;date&#39;</code></p>\n<p>Creates datepicker.</p>\n<h3 id="time">Time</h3>\n<p><code>$foo_time_type : &#39;time&#39;</code></p>\n<p>Creates time selection dropdown.</p>\n',
		contents: [
			{
				heading: 'What are control types?',
				level: '2',
				link: 'what-are-control-types-'
			},
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
				heading: 'File',
				level: '3',
				link: 'file'
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
			},
			{
				heading: 'Date',
				level: '3',
				link: 'date'
			},
			{
				heading: 'Time',
				level: '3',
				link: 'time'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}