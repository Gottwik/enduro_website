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
		marked_doc: '',
		contents: []
	}
}