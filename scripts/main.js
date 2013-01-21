
(function($) {
  var ready = function () {
    var headerFormattingButtons = ['formatting', '|', 'bold', '|', 'fontcolor', '|', 'alignleft', 'alignright'];
    var mainFormattingButtons = ['formatting', '|', 'bold', '|', 'image', 'table', '|', 'alignleft', 'alignright'];
    var footerFormattingButtons = ['formatting', '|', 'bold', '|', 'table', '|', 'alignleft', 'alignright'];

    var headerOptions = {
      buttons: headerFormattingButtons,
      toolbarExternal: '.external-header-toolbar',
      formattingTags: ['h1', 'h2'],
      convertLinks: false,
      colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'],
      allowedTags: ['h1', 'h2'],
      plugins: ['externalswitcher']
    };

    var mainOptions = {
      buttons: mainFormattingButtons,
      toolbarExternal: '.external-main-toolbar',
      plugins: ['externalswitcher']
    };

    var footerOptions = {
      buttons: footerFormattingButtons,
      toolbarExternal: '.external-footer-toolbar',
      formattingTags: ['p'],
      convertLinks: false,
      allowedTags: ['p', 'b'],
      plugins: ['externalswitcher']
    };

    $('.header-redactor').redactor(headerOptions);
    $('.main-redactor').redactor(mainOptions);
    $('.footer-redactor').redactor(footerOptions);
  };

  $(document).ready(ready);
})(jQuery);