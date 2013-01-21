if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};
if (typeof RedactorToolbars === 'undefined') var RedactorToolbars = [];

(function($){
  RedactorPlugins.externalswitcher = {
    init: function() {
      RedactorToolbars.push(this.$toolbar);

      $(this.$toolbar).hide();
      
      $(this.$editor).bind('focus blur', $.proxy(function (event) {
        console.log(this);

        if (event.type === 'focus') {
          for(var i = 0; i < RedactorToolbars.length; i++) {
            $(RedactorToolbars[i]).hide();
          }
          $(this.$toolbar).show();
        }
        if (event.type === 'blur') {
          // $(this.$toolbar).hide();
        }
      }, this));
    }
  };
})(jQuery);