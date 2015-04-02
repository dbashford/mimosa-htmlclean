"use strict";

var config = require( "./config" )
  , htmlclean = require( "htmlclean" );

var _execute = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      // do not do anything if no input text available
      if ( file.inputFileText ) {
        var prevSize = file.inputFileText.length;
        if ( typeof file.inputFileText === "object" ) {
          file.inputFileText = file.inputFileText.toString();
        }
        try {
          file.inputFileText = htmlclean( file.inputFileText, mimosaConfig.htmlclean.options || {});
          var minifiedSize = file.inputFileText.length;
          if ( minifiedSize < prevSize ) {
            var sizeDiff = prevSize - minifiedSize;
            var pcnt = Math.round( ( sizeDiff / prevSize ) * 100 );
            mimosaConfig.log.info( "Saved [[ " + sizeDiff + " (" + pcnt + "%) ]] characters for file [[ " + file.inputFileName + " ]]");
          }
        } catch (err) {
          return mimosaConfig.log.error( "Error occurred in htmlclean [[ " + file.inputFileName + " ]] ", err );
        }
      }
    });
  }

  next();
};

var registration = function ( mimosaConfig, register ) {
  if ( mimosaConfig.isMinify ) {
    register( [ "add", "update", "buildFile", "buildExtension"], "afterRead", _execute, mimosaConfig.htmlclean.extensions );
  }
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  validate: config.validate
};