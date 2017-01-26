{
	title: 'Link s3 to enduro',
	$date_value: '2017-01-24',
	$date_type: 'date',
	date: 'Tuesday, 24 January, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Linking enduro to aws s3 storage enables two features:\n* **Uploading** images directly to s3 from the admin interface\n* Using **juicebox** to version and backup site\'s content\n\nBelow is a step-by-step guide on how to enable s3:\n\n## Link the s3 bucket\nFirst, you have to have a s3 bucket created. [Create one](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) if you didn\'t do so. When you have your s3 bucket ready, just pass it\'s name to enduro in $$/enduro.json file along with the region of this bucket:\n\n```\n{\n	"project_name": "Your project name",\n	"project_slug": "ypn",\n	"s3": {\n		"bucket": "testbucket",\n		"region": "eu-west-1"\n	}\n}\n```\n\n## Add the aws credentials\n\nBe careful not to use the root credentials, but to use iam to create a key pair for use with s3 only. Once you have your key and secret, add it to $$/enduro_secret.json or as a environment variable:\n\n```\n{\n	"secret": {\n		"s3": {\n			"S3_KEY": "<your_aws_key>",\n			"S3_SECRET": "<your_aws_secret_key>"\n		}\n	}\n}\n```\n\nWow, we are done! Now you can use juicebox, upload images to s3 from admin interface.',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '',
		contents: []
	},
	teaser: {
		doc: 'Linking enduro to aws s3 storage enables uploading images directly to s3 from the admin interface and using juicebox to version and backup site\'s content',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '',
			contents: []
		}
	}
}