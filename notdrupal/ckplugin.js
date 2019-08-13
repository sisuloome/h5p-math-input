console.log("xd");

var H5PEditor = H5PEditor || {};
H5PEditor.HtmlAddons = H5PEditor.HtmlAddons || {};
H5PEditor.HtmlAddons.mathinput = H5PEditor.HtmlAddons.mathinput || {};
H5PEditor.HtmlAddons.mathinput.mathinput = function (config, tags) {

  console.log("running");

  // Add the plugin.
  config.extraPlugins = (config.extraPlugins ? ',' : '') + 'ck_vme,iframedialog';

    // Add plugin to toolbar.
  config.toolbar.push({
    name: "ck_vme",
    items: ['VMELauncher']
  });

  tags.push('sup');
  tags.push('img');
  tags.push('mathinput');
};

(function ($) {
  $(document).ready(function () {
    console.log(CKEDITOR);

    /* doesnt work in IE (any version) */
    var fullUrl = document.currentScript.src;
    /* doesnt work in IE (any version) */

    var folder = fullUrl.substring(0, fullUrl.lastIndexOf('/'));
    console.log(folder);

    if (window.CKEDITOR !== undefined) {
      CKEDITOR.plugins.addExternal('ck_vme', folder + '/ck_vme/');
      CKEDITOR.plugins.addExternal('iframedialog', folder + '/iframedialog/');
    }
  });
})(H5P.jQuery);