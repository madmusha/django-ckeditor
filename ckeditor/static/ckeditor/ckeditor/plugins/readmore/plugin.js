CKEDITOR.plugins.add('readmore', {

    init: function (editor) {

        // Register the toolbar buttons.
        editor.ui.addButton('ReadMore', {
            label: 'Insert More Break',
            icon: this.path + 'images/more.gif',
            command: 'readmore'
        });

        // Register the commands.
        editor.addCommand('readmore', {
            exec: function (editor) {
                var element = CKEDITOR.dom.element.createFromHtml( '<strong class="anyclass">My element</strong>' );
                editor.insertHtml("<button data-uk-toggle=\"{target:'#hide-content', animation:'uk-animation-fade, " +
                    "uk-animation-fade'}\" class=\"btn-border\">Читать полностью </button>" +
                        "<div id=\"hide-content\" class=\"uk-hidden\"><p>Текст, который появится после нажатия на кнопку</p></div>"
                );
            }
        });

    }

});
