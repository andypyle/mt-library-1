'use strict';

import jsdom from 'jsdom';

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

function noop() {
  return {};
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.sass'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.svg'] = noop;

var hook = require('css-modules-require-hook')
var sass = require('node-sass')

hook({
  extensions: [ '.scss', '.css', '.sass' ],
  generateScopedName: '[local]___[hash:base64:5]',
  preprocessCss: ( data, file ) => sass.renderSync({ file }).css
})