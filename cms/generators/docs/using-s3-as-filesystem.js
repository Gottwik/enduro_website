{
	title: 'Link s3 to enduro',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Linking enduro to aws s3 storage enables two features:\n* **Uploading** images directly to s3 from the admin interface\n* Using **juicebox** to version and backup site\'s content\n\nTo enable s3 quickly, just use `enduro setup s3`:\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488921448_cp.png)\n\nWow, we are done! Now you can use juicebox, upload images to s3 from admin interface.\n\n## Manual setup\n\nBelow is a step-by-step guide on how to enable s3:\n\n### Link the s3 bucket\nFirst, you have to have a s3 bucket created. [Create one](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) if you didn\'t do so. When you have your s3 bucket ready, just pass it\'s name to enduro in $$/enduro.json file along with the region of this bucket:\n\n```\n{\n	"project_name": "Your project name",\n	"project_slug": "ypn",\n	"s3": {\n		"bucket": "testbucket",\n		"region": "eu-west-1"\n	}\n}\n```\n\n### Add the aws credentials\n\nBe careful not to use the root credentials, but to use iam to create a key pair for use with s3 only. Once you have your key and secret, add it to $$/enduro_secret.json or as a environment variable:\n\n```\n{\n	"secret": {\n		"s3": {\n			"S3_KEY": "<your_aws_key>",\n			"S3_SECRET": "<your_aws_secret_key>"\n		}\n	}\n}\n```\n\n### Cloudfront\nCloudfront is a cdn from aws. If you want to use it, just add cloudfront variable into the s3 object in $$/enduro.json file.\n\n```\n{\n	"project_name": "enduro website",\n	"project_slug": "ew",\n	"s3": {\n		"bucket": "enduro.website",\n		"region": "eu-west-1",\n		"cloudfront": "d32ujqjov16ho0.cloudfront.net"\n	},\n	"juicebox_enabled": true\n}\n```\n\n### Limitations\nCurrently, using s3 Frankfurt - eu-central-1 location is not possible.',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Linking enduro to aws s3 storage enables two features:</p>\n<ul>\n<li><strong>Uploading</strong> images directly to s3 from the admin interface</li>\n<li>Using <strong>juicebox</strong> to version and backup site&#39;s content</li>\n</ul>\n<p>To enable s3 quickly, just use <code>enduro setup s3</code>:</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1488921448_cp.png" alt=""></p>\n<p>Wow, we are done! Now you can use juicebox, upload images to s3 from admin interface.</p>\n<h2 id="manual-setup">Manual setup</h2>\n<p>Below is a step-by-step guide on how to enable s3:</p>\n<h3 id="link-the-s3-bucket">Link the s3 bucket</h3>\n<p>First, you have to have a s3 bucket created. <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create one</a> if you didn&#39;t do so. When you have your s3 bucket ready, just pass it&#39;s name to enduro in <span class="markdown_folder">/enduro.json</span> file along with the region of this bucket:</p>\n<pre><code>{\n    &quot;project_name&quot;: &quot;Your project name&quot;,\n    &quot;project_slug&quot;: &quot;ypn&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;testbucket&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;\n    }\n}\n</code></pre><h3 id="add-the-aws-credentials">Add the aws credentials</h3>\n<p>Be careful not to use the root credentials, but to use iam to create a key pair for use with s3 only. Once you have your key and secret, add it to <span class="markdown_folder">/enduro_secret.json</span> or as a environment variable:</p>\n<pre><code>{\n    &quot;secret&quot;: {\n        &quot;s3&quot;: {\n            &quot;S3_KEY&quot;: &quot;&lt;your_aws_key&gt;&quot;,\n            &quot;S3_SECRET&quot;: &quot;&lt;your_aws_secret_key&gt;&quot;\n        }\n    }\n}\n</code></pre><h3 id="cloudfront">Cloudfront</h3>\n<p>Cloudfront is a cdn from aws. If you want to use it, just add cloudfront variable into the s3 object in <span class="markdown_folder">/enduro.json</span> file.</p>\n<pre><code>{\n    &quot;project_name&quot;: &quot;enduro website&quot;,\n    &quot;project_slug&quot;: &quot;ew&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;enduro.website&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;,\n        &quot;cloudfront&quot;: &quot;d32ujqjov16ho0.cloudfront.net&quot;\n    },\n    &quot;juicebox_enabled&quot;: true\n}\n</code></pre><h3 id="limitations">Limitations</h3>\n<p>Currently, using s3 Frankfurt - eu-central-1 location is not possible.</p>\n',
		contents: [
			{
				heading: 'Manual setup',
				level: '2',
				link: 'manual-setup'
			},
			{
				heading: 'Link the s3 bucket',
				level: '3',
				link: 'link-the-s3-bucket'
			},
			{
				heading: 'Add the aws credentials',
				level: '3',
				link: 'add-the-aws-credentials'
			},
			{
				heading: 'Cloudfront',
				level: '3',
				link: 'cloudfront'
			},
			{
				heading: 'Limitations',
				level: '3',
				link: 'limitations'
			}
		]
	},
	teaser: {
		doc: 'Linking enduro to aws s3 storage enables uploading images directly to s3 from the admin interface and using juicebox to version and backup site\'s content',
		$image_type: 'image',
		image: 'https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1485522666_aws.png',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Linking enduro to aws s3 storage enables uploading images directly to s3 from the admin interface and using juicebox to version and backup site&#39;s content</p>\n',
			contents: []
		}
	},
	meta: {
		last_edited: 1501680325
	}
}