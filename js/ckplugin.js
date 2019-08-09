console.log("test");

var xd = true;

(function ($, Drupal) {
  Drupal.behaviors.h5pMathInput = {
    attach: function(context, settings) {
      if (xd) {
        console.log("xd");
        xd = false;
      }
    }
  }
})(jQuery, Drupal);