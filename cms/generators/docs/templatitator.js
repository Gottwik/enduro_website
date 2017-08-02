{
	title: 'Templatitator',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Templatitator helps you structure your content in an object-like fashion.\n\n## Example\nLet us have a list of animals:\n```js\n{\n	animals: [\n		{\n			animal_type: \'Dog\',\n			name: \'Rufus\',\n			barks: true\n		},\n		{\n			animal_type: \'Parrot\',\n			name: \'Pedro\',\n			talks: false\n		},\n	]\n}\n```\n\nand you want to be able to add either a __dog__ or a __parrot__ to the list. Notice their properties are different, dog can bark and parrot can talk. What you do is you create templates for each of these animals:\n```js\n{\n	animal_types: {\n		dog: {\n			animal_type: \'dog\',\n			name: \'\',\n			barks: false\n		},\n		parrot: {\n			animal_type: \'parrot\',\n			name: \'\',\n			talks: false\n		},\n	}\n}\n```\n\nAnd then use the cool __templatitator__ feature to enable user to select from these two animal types:\n```\n{\n	$animals_templatitator: \'@@animal_types\',\n	animals: []\n}\n```\n\nNow user has a nice way to add either a parrot or a dog to his animal list:\n\n![](/assets/img/example_files/templatitator.gif)\n\n## Test it out\n\nIf you just want to quickly see how this works in your project, just copy/paste this into your context file:\n\n```\n{\n	$animal_types_hidden: true,\n	animal_types: {\n		dog: {\n			$animal_type_type: \'title\',\n			animal_type: \'dog\',\n			name: \'\',\n			barks: false\n		},\n		parrot: {\n			$animal_type_type: \'title\',\n			animal_type: \'parrot\',\n			name: \'\',\n			talks: false\n		},\n	},\n	$animals_templatitator: \'@@animal_types\',\n	animals: [],\n}\n```\n\n## Templates folder\nWhatever you place in $$global/templates folder will not be visible in admin ui, what is very convenient for storing templatitator templates, such as the animal types above.\n\n## Splitting templates into multiple files\nWho wants to have a huge file with ten templates, right? You can easily split the templates into more files: \n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1489053408_cp.png)\n\n$$/cms/global/templates/animals/dog.js\n```\nanimal_types: {\n	dog: {\n		$animal_type_type: \'title\',\n		animal_type: \'dog\',\n		name: \'\',\n		barks: false\n	},\n},\n```\n\n$$/cms/global/templates/animals/parrot.js\n```\nanimal_types: {\n	parrot: {\n		$animal_type_type: \'title\',\n		animal_type: \'parrot\',\n		name: \'\',\n		talks: false\n	},\n},\n```\n\nenduro will merge both *dog* and *parrot* into single *animal_types* object. Since it\'s located in $$cms/global directory it will be accessible by:\n```\n{\n	$animals_templatitator: \'@@global.animal_types\',\n	animals: [],\n}\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Templatitator helps you structure your content in an object-like fashion.</p>\n<h2 id="example">Example</h2>\n<p>Let us have a list of animals:</p>\n<pre><code class="lang-js">{\n    animals: [\n        {\n            animal_type: &#39;Dog&#39;,\n            name: &#39;Rufus&#39;,\n            barks: true\n        },\n        {\n            animal_type: &#39;Parrot&#39;,\n            name: &#39;Pedro&#39;,\n            talks: false\n        },\n    ]\n}\n</code></pre>\n<p>and you want to be able to add either a <strong>dog</strong> or a <strong>parrot</strong> to the list. Notice their properties are different, dog can bark and parrot can talk. What you do is you create templates for each of these animals:</p>\n<pre><code class="lang-js">{\n    animal_types: {\n        dog: {\n            animal_type: &#39;dog&#39;,\n            name: &#39;&#39;,\n            barks: false\n        },\n        parrot: {\n            animal_type: &#39;parrot&#39;,\n            name: &#39;&#39;,\n            talks: false\n        },\n    }\n}\n</code></pre>\n<p>And then use the cool <strong>templatitator</strong> feature to enable user to select from these two animal types:</p>\n<pre><code>{\n    $animals_templatitator: &#39;@@animal_types&#39;,\n    animals: []\n}\n</code></pre><p>Now user has a nice way to add either a parrot or a dog to his animal list:</p>\n<p><img src="/assets/img/example_files/templatitator.gif" alt=""></p>\n<h2 id="test-it-out">Test it out</h2>\n<p>If you just want to quickly see how this works in your project, just copy/paste this into your context file:</p>\n<pre><code>{\n    $animal_types_hidden: true,\n    animal_types: {\n        dog: {\n            $animal_type_type: &#39;title&#39;,\n            animal_type: &#39;dog&#39;,\n            name: &#39;&#39;,\n            barks: false\n        },\n        parrot: {\n            $animal_type_type: &#39;title&#39;,\n            animal_type: &#39;parrot&#39;,\n            name: &#39;&#39;,\n            talks: false\n        },\n    },\n    $animals_templatitator: &#39;@@animal_types&#39;,\n    animals: [],\n}\n</code></pre><h2 id="templates-folder">Templates folder</h2>\n<p>Whatever you place in <span class="markdown_folder">global/templates</span> folder will not be visible in admin ui, what is very convenient for storing templatitator templates, such as the animal types above.</p>\n<h2 id="splitting-templates-into-multiple-files">Splitting templates into multiple files</h2>\n<p>Who wants to have a huge file with ten templates, right? You can easily split the templates into more files: </p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1489053408_cp.png" alt=""></p>\n<p><span class="markdown_folder">/cms/global/templates/animals/dog.js</span></p>\n<pre><code>animal_types: {\n    dog: {\n        $animal_type_type: &#39;title&#39;,\n        animal_type: &#39;dog&#39;,\n        name: &#39;&#39;,\n        barks: false\n    },\n},\n</code></pre><p><span class="markdown_folder">/cms/global/templates/animals/parrot.js</span></p>\n<pre><code>animal_types: {\n    parrot: {\n        $animal_type_type: &#39;title&#39;,\n        animal_type: &#39;parrot&#39;,\n        name: &#39;&#39;,\n        talks: false\n    },\n},\n</code></pre><p>enduro will merge both <em>dog</em> and <em>parrot</em> into single <em>animal_types</em> object. Since it&#39;s located in <span class="markdown_folder">cms/global</span> directory it will be accessible by:</p>\n<pre><code>{\n    $animals_templatitator: &#39;@@global.animal_types&#39;,\n    animals: [],\n}\n</code></pre>',
		contents: [
			{
				heading: 'Example',
				level: '2',
				link: 'example'
			},
			{
				heading: 'Test it out',
				level: '2',
				link: 'test-it-out'
			},
			{
				heading: 'Templates folder',
				level: '2',
				link: 'templates-folder'
			},
			{
				heading: 'Splitting templates into multiple files',
				level: '2',
				link: 'splitting-templates-into-multiple-files'
			}
		]
	},
	meta: {
		last_edited: 1501680325
	}
}