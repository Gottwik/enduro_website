{
	title: 'Iconfont generators',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '![making svg icons](/assets/img/example_files/makingicons.png)\n\n\n## Iconfont generator\nJust place one icon per file in `svg` format in $$assets/fonticons . Enduro will process these files and generate an icon font and an associated stylesheet. Finally, all you need to do is include the produced `.scss` file :\n```\n@import \'../../_generated/_prebuilt/icons\';\n```\n\n### Using generated iconfont\nOnce you have included the generated scss file, you can use the icons in two ways:\n\n**In sass**\n```css\n@include icon(user)\n```\n\n**In html**\n```\n<i class="icon-user></i>\n```\n\n### Making icons\n\nI use adobe illustrator to create icons. Check out this [sample file](/assets/img/example_files/icons_20.ai). To export the file, I choose \'use artboards\' option, which will save as many `svg` files as there are artboards in the file.\n\n![making svg icons](/assets/img/example_files/useartboards.png)\n\nThanks to [https://github.com/nfroidure/gulp-iconfont](Gulp-iconfont) which enduro uses internally to make all this happen.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p><img src="/assets/img/example_files/makingicons.png" alt="making svg icons"></p>\n<h2 id="iconfont-generator">Iconfont generator</h2>\n<p>Just place one icon per file in <code>svg</code> format in <span class="markdown_folder">assets/fonticons</span> . Enduro will process these files and generate an icon font and an associated stylesheet. Finally, all you need to do is include the produced <code>.scss</code> file :</p>\n<pre><code>@import &#39;../../_generated/_prebuilt/icons&#39;;\n</code></pre><h3 id="using-generated-iconfont">Using generated iconfont</h3>\n<p>Once you have included the generated scss file, you can use the icons in two ways:</p>\n<p><strong>In sass</strong></p>\n<pre><code class="lang-css">@include icon(user)\n</code></pre>\n<p><strong>In html</strong></p>\n<pre><code>&lt;i class=&quot;icon-user&gt;&lt;/i&gt;\n</code></pre><h3 id="making-icons">Making icons</h3>\n<p>I use adobe illustrator to create icons. Check out this <a href="/assets/img/example_files/icons_20.ai">sample file</a>. To export the file, I choose &#39;use artboards&#39; option, which will save as many <code>svg</code> files as there are artboards in the file.</p>\n<p><img src="/assets/img/example_files/useartboards.png" alt="making svg icons"></p>\n<p>Thanks to <a href="Gulp-iconfont">https://github.com/nfroidure/gulp-iconfont</a> which enduro uses internally to make all this happen.</p>\n',
		contents: [
			{
				heading: 'Iconfont generator',
				level: '2',
				link: 'iconfont-generator'
			},
			{
				heading: 'Using generated iconfont',
				level: '3',
				link: 'using-generated-iconfont'
			},
			{
				heading: 'Making icons',
				level: '3',
				link: 'making-icons'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}