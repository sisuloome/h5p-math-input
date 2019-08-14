var iframeWindow = null;
var element	= null;
var equation = null;

CKEDITOR.plugins.add( 'ck_vme', {
    requires : ['iframedialog'],
    icons: 'fx',
    init: function( editor ) {
        CKEDITOR.dialog.addIframe(
            'vme.dlg',
            'VisualMathEditor',
            folder + '/ck_vme/VisualMathEditor/VisualMathEditor.html?runLocal&style=bootstrap',
            800,
            600,
            function() {
                iframeid=this._.frameId;/*get the iframe*/
                //console.log(iframeid);
                var iframe = document.getElementById( this._.frameId );
                iframeWindow = iframe.contentWindow;

            },
            {
                onLoad: function () {
                    editor.resize( '100%', '850' )
                },
                onShow: function() {
                    // Detect if edit or new mode (if new create an empty element)
                    var selection = editor.getSelection();
                    var selected_text = editor.getSelection().getSelectedText();
                    console.log(selected_text);
                    element = selection.getStartElement();
                    if ( element ){
                        element = element.getAscendant( 'span', true );

                    }

                    if ( !element || element.getName() != 'span' ) {
                        element = editor.document.createElement( 'span' );
                        element.setAttribute("data-latex");
                        if (selected_text){
                            element.setText(selected_text);
                        }
                        this.insertMode = true;
                    }
                    else
                        this.insertMode = false;

                    this.element = element;
                    if ( !this.insertMode )
                        this.setupContent( this.element );


                    var hover_text = editor.getSelection().getStartElement().getText();
                    if (hover_text){
                        while(hover_text.charAt(0) === '$')
                        {
                            hover_text = hover_text.substr(2);
                            hover_text = hover_text.slice(0, -2);
                        }
                        console.log(hover_text);
                        setTimeout(function () {
                            iframeWindow.vme.codeMirrorEditor.setValue(hover_text);
                        },4000);
                    }
                },
                onOk : function()// Dialog onOk callback.
                {
                    var vmeLatexValue = iframeWindow.vme.codeMirrorEditor.getValue();
                    // Set data from iframe in the element if new insert the element in the editor
                    var tag = this.element;
                    // Get the value of an editable selectOneMenu Primefaces
                    tag.setAttribute("data-latex",vmeLatexValue);
                    tag.setAttribute("class","ce_latex");

                    // Get the value of a standard input
                    tag.setText( '$$' + vmeLatexValue + '$$');
                    this.commitContent( tag );
                    if ( this.insertMode ){
                        this._.editor.insertElement(tag);
                    }



                    //console.log('vme textvalue', texttoadd);
                    //editor.insertHtml(texttoadd);
                }
            }
        );

        editor.addCommand( 'openVMEDialog', {
            exec: function( editor ) {
                editor.openDialog('vme.dlg');
            }
        });
        editor.ui.addButton( 'VMELauncher', {
            label: 'Lisa matemaatiline valem',
            command: 'openVMEDialog',
            toolbar: 'insert',
            icon: this.path + 'icons/fx.png'
        });
    }
});
