CKEDITOR.plugins.add('grid', {
	requires: 'widget',
	init: function(editor) {

		editor.widgets.add('grid-widget', {
			//template: '<div class="widget"> asdf </div>',
			upcast: function(element) {
				return (element.name == 'div' && element.hasClass('widget')); //
			},
			downcast: function(element) {

			},
		});


		editor.ui.addButton('grid', {
			label: 'Demo',
			command: 'grid-widget',
			onClick: function() {
				console.log('click');
			}
		});

	}
});