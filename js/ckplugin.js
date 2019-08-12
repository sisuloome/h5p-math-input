console.log("test");

var done = false;

(function ($, drupalSettings) {
  $(document).ready(function () {
    console.log("xd"); 
    console.log(drupalSettings.h5pMathInput.sourcePath);
  });
})(jQuery, drupalSettings);