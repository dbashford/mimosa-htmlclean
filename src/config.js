"use strict";

exports.defaults = function() {
  return {
    minifyHtml: {
      extensions:["htm", "html"],
      options: {}
    }
  };
};

exports.validate = function( mimosaConfig, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "minifyHtml config", mimosaConfig.minifyHtml ) ) {
    validators.ifExistsIsObject( errors, "minifyHtml.options", mimosaConfig.minifyHtml.options );
    validators.ifExistsIsArrayOfStrings( errors, "minifyHtml.extensions", mimosaConfig.minifyHtml.extensions );
  }

  return errors;
};
