Package.describe({
  name: 'fredstrange:iscroll',
  summary: 'A meteor wrapper for the javascript library iScroll',
  version: '5.1.3',
  git: 'https://github.com/fredstrange/meteor-iscroll.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('fredstrange:iscroll.js');
});

Package.onTest(function(api) {
  api.use('');
  api.addFiles(
  	[
  	'iscroll/build/iscroll.js', 
  	'iscroll/build/iscroll-lite.js', 
  	'iscroll/build/iscroll-infinite.js', 
  	'iscroll/build/iscroll-probe.js', 
  	'iscroll/build/iscroll-zoom.js', 
  	],

  	['client']);

  api.export('IScroll', 'client');
});
