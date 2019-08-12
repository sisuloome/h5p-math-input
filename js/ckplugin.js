(function ($) {
  $(document).ready(function () {
    console.log(CKEDITOR);

    /* doesnt work in IE (any version) */
    var script = document.currentScript;
    var fullUrl = script.src;
    console.log(fullUrl);
    /* doesnt work in IE (any version) */
    
  });
})(H5P.jQuery);