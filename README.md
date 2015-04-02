mimosa-htmlclean
===========

## Overview

This module uses [htmlclean](https://github.com/anseki/htmlclean) to minify `.html` files or `.html`-like files.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'htmlclean'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

During `mimosa build` and `mimosa watch`, when the `--minify` flag is enabled, this module will optimize the files specified in the `extensions` array.

This module performs the minification immediately after a file has been read.  You can specific template files to be minified as well.

## Default Config

```javascript
htmlclean: {
  extensions:["htm", "html"]
  options: {}
}
```

#### `options` an object,
Pass-through options to the [htmlclean](https://github.com/anseki/htmlclean#options) library.
