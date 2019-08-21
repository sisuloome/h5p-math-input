/**
 * Created by aido on 14/07/2017.
 */

console.log('test.js loaded');
var onDialogEvent = function (e) {
    console.log('ondialogevent');
    if (e === 'ok'){
        console.log('ok');
    }
};

/* Initialize important CKEditor variables from opening editor. */
var CKEDITOR   = window.parent.CKEDITOR;


var okListener = function(ev) {
    var value = vme.codeMirrorEditor.getValue();
    //console.log(value);
    //CKEDITOR.editor.insertHtml(value);

    // remove the listeners to avoid any JS exceptions
    CKEDITOR.dialog.getCurrent().removeListener("ok", okListener);
    CKEDITOR.dialog.getCurrent().removeListener("cancel", cancelListener);
};

var cancelListener = function(ev) {
    alert("CANCEL!");
    // remove the listeners to avoid any JS exceptions
    CKEDITOR.dialog.getCurrent().removeListener("ok", okListener);
    CKEDITOR.dialog.getCurrent().removeListener("cancel", cancelListener);
};

CKEDITOR.event.implementOn(CKEDITOR.dialog.getCurrent());
CKEDITOR.dialog.getCurrent().on("ok", okListener);
CKEDITOR.dialog.getCurrent().on("cancel", cancelListener);

