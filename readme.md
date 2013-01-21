# Redactor External Toolbar Switcher
---

A solution for handling multiple `externalToolbar`s in Redactor.

See `index.html` for an example.

## Quick reference

### Prerequisites
- Add a `externalswitcher.js` script tag to load the plugin.

```
  <script src="scripts/redactor/externalswitcher.js"></script>
```

### Markup
Add HTML elements for the external toolbars, one for each toolbar.

```
  <div class="external-header-toolbar"></div>  
  <div class="external-main-toolbar"></div>  
  <div class="external-footer-toolbar"></div>
```

Make sure each Redactor field has its own unique class name:

```
  <textarea class="header-redactor redactor"></textarea>  
  <textarea class="main-redactor redactor"></textarea>  
  <textarea lass="footer-redactor redactor"></textarea>
```

### Javascript
Reference the unique Redactor fields class names from your markup when setting up your Redactor fields, and don't forget to add the `externalswitcher` plugin to your settings.

```
  $('.header-redactor').redactor({toolbarExternal: '.external-header-toolbar', plugins: ['externalswitcher']});  
  $('.main-redactor').redactor({toolbarExternal: '.external-main-toolbar', plugins: ['externalswitcher']});  
  $('.footer-redactor').redactor({toolbarExternal: '.external-footer-toolbar', plugins: ['externalswitcher']});
```