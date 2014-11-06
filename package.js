Package.describe({
  name: 'fredstrange:iscroll',
  summary: 'A meteor wrapper for the javascript library iScroll',
  version: '5.1.3',
  git: 'https://github.com/fredstrange/meteor-iscroll.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles(
      [
        'iscroll/iscroll.js',
        'iscroll/iscroll-lite.js',
        'iscroll/iscroll-infinite.js',
        'iscroll/iscroll-probe.js',
        'iscroll/iscroll-zoom.js'
      ],

      ['client']);

  api.export([
    'IScroll',
    'IScrollLite',
    'IScrollInfinate',
    'IScrollProbe',
    'IScrollZoom'
    ], 'client');
});
