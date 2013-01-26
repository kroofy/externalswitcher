if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};
if (typeof RedactorToolbars === 'undefined') var RedactorToolbars = [];

(function($){
  'use strict';
  RedactorPlugins.externalswitcher = {
    init: function() {
      RedactorToolbars.push(this.$toolbar);

      $(this.$toolbar).hide();
      
      $(this.$editor).focus($.proxy(function () {
        for(var i = 0; i < RedactorToolbars.length; i++) {
          $(RedactorToolbars[i]).hide();
        }
        $(this.$toolbar).show();
      }, this));
    }
  };
})(jQuery);