<?php

namespace Drupal\h5p_math_input\Config;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Config\ConfigFactoryOverrideInterface;
use Drupal\Core\Config\StorageInterface;

class H5pMathInputOverrides implements ConfigFactoryOverrideInterface {

  /**
   * {@inheritdoc}
   */
  public function loadOverrides($names) {
    $overrides = array();

    //purpose of this override is to change mathjax inline and block display symbols

    if (in_array('h5p.settings', $names)) {

      $overrides['h5p.settings']['h5p_library_config'] = [
        'H5P.MathDisplay' => [
          "observers" => [
            [ "name" => "mutationObserver", "params" => [ "cooldown" => 500, ], ],
            [ "name" => "domChangedListener", ],
            [ "name" => "interval", "params" => [ "time" => 1000, ], ],
          ],
          "renderer" => [
            "mathjax" => [
              "src" => "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js",
              "config" => [
                "extensions" => [ "tex2jax.js", ],
                "jax" => [ "input/TeX", "output/HTML-CSS", ],
                "tex2jax" => [
                  "ignoreClass" => "ckeditor",

                  //change symbols
                  "inlineMath" => [
                    [ '$$', '$$', ],
                    [ '\\(', '\\)', ],
                  ],
                  "displayMath" => [ 
                    [ '$$$', '$$$', ],
                    [ '\\[', '\\]', ],
                  ],
                ],
                "messageStyle" => "none",
              ],
            ],
          ],
        ],
      ];

    }

    return $overrides;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheSuffix() {
    return 'H5pMathInputOverrider';
  }
  
  /**
   * {@inheritdoc}
   */
  public function getCacheableMetadata($name) {
    return new CacheableMetadata();
  }

  /**
   * {@inheritdoc}
   */
  public function createConfigObject($name, $collection = StorageInterface::DEFAULT_COLLECTION) {
    return NULL;
  }

}