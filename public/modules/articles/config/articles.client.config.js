'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Lists', 'articles', 'dropdown', '/articles(/create)?', true);
		Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles',true,true);
		Menus.addSubMenuItem('topbar', 'articles', 'List Blogs', 'blogs',true, true);
	}
]);
