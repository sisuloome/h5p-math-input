(function ($, drupalSettings) {
  $(document).ready(function () {
    console.log("loader"); 

    var path = drupalSettings.h5pMathInput.path;
    console.log(path);

    H5PEditor.assets.js.push(path + "/ckplugin.js");
    H5PEditor.ck_vmePath = path + "/ck_vme/";
    H5PEditor.iframedialogPath = path + "/iframedialog";

    console.log(H5PEditor);
  });
})(jQuery, drupalSettings);