{
	title: 'Spritesheet generator',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro.js has spritesheet generation built-in.\n\n## Save all sprites\nSave all your sprites to $$assets/spriteicons. These sprites should be *png* and you also need to save a double sized sprite, with @2x added at the end of the name.\n\n![retina sprites](/assets/img/example_files/retinasprites.png)\n\n## Include sass file\nThe spritesheet generation process will generate a **.scss** file that stores coordinates for each sprite. You have to include this file in your main.scss file. Use syntax below to include this file.\n\n```\n@import \'../../_generated/_prebuilt/sprites\';\n```\n\n## Use the sprites\nYou can access the sprites with a convenient mixin `@include retina-sprite($<original_file_name>);`. This mixin will set the background image, its position and its size.\n\nCredits to https://github.com/Ensighten/spritesmith, which enduro.js uses internally to provide support for retina sprites.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro.js has spritesheet generation built-in.</p>\n<h2 id="save-all-sprites">Save all sprites</h2>\n<p>Save all your sprites to <span class="markdown_folder">assets/spriteicons.</span> These sprites should be <em>png</em> and you also need to save a double sized sprite, with @2x added at the end of the name.</p>\n<p><img src="/assets/img/example_files/retinasprites.png" alt="retina sprites"></p>\n<h2 id="include-sass-file">Include sass file</h2>\n<p>The spritesheet generation process will generate a <strong>.scss</strong> file that stores coordinates for each sprite. You have to include this file in your main.scss file. Use syntax below to include this file.</p>\n<pre><code>@import &#39;../../_generated/_prebuilt/sprites&#39;;\n</code></pre><h2 id="use-the-sprites">Use the sprites</h2>\n<p>You can access the sprites with a convenient mixin <code>@include retina-sprite($&lt;original_file_name&gt;);</code>. This mixin will set the background image, its position and its size.</p>\n<p>Credits to <a href="https://github.com/Ensighten/spritesmith">https://github.com/Ensighten/spritesmith</a>, which enduro.js uses internally to provide support for retina sprites.</p>\n',
		contents: [
			{
				heading: 'Save all sprites',
				level: '2',
				link: 'save-all-sprites'
			},
			{
				heading: 'Include sass file',
				level: '2',
				link: 'include-sass-file'
			},
			{
				heading: 'Use the sprites',
				level: '2',
				link: 'use-the-sprites'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}