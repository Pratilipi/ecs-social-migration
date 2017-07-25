/*
A Utility to parse the client given data to required format
*/

module.exports = ParserUtility;

const PAGE = require( '../config/page.js' ).PAGE;
const validatorUtility = require( './ValidatorUtility.js' )();
const helperUtility = require( './HelperUtility.js' )();
const _ = require( 'lodash' );

function ParserUtility() {

  return {

    getIds: function( ids ) {
      try {
        if( validatorUtility.isIds( ids ) ) {
          ids = ids.split( ',' ).map( JSON.parse ).map( Number );
          return ids;
        } else {
          helperUtility.createErrorObject( 400, 'Wrong type of ids. Need an array of 16 digits number.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getId: function( id ) {
      try {
        if( validatorUtility.isId( id ) ) {
          id = Number( id );
          return id;
        } else {
          helperUtility.createErrorObject( 400, 'Wrong id. Need a 16 digits number.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getUri: function( uri ) {
      try{
        if( validatorUtility.isUri( uri.toLowerCase() ) ) {
          return  uri.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong uri. Need a string /{PAGE_TYPE}/{id} where id is 16 digits and PAGE_TYPE is existing types.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getUriAlias: function( uriAlias ) {
      try {
        if( validatorUtility.isUriAlias(  uriAlias.toLowerCase() ) ) {
          return  uriAlias.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong uriAlias. Need a string /{string}/{string}</{string}> where string is alphabets, numbers and -.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getPageUrl: function( pageUrl ) {
      try {
        if( validatorUtility.isPageUrl(  pageUrl.toLowerCase() ) ) {
          return  pageUrl.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong pageUrl. Need a /{string}/{string}</{string}> where string is alphabets, numbers and -.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getUriPrefix: function( uriPrefix ) {
      try {
        if( validatorUtility.isUriPrefix(  uriPrefix.toLowerCase() ) ) {
          return  uriPrefix.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong uriPrefix. Need a </{string}> where string is alphabets, numbers and -.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getKeywords: function( keywords ) {
      try {
        if( validatorUtility.isKeywords( keywords.toLowerCase() ) ) {
          keywords =  keywords.toLowerCase().split( ',' );
          return keywords;
        } else {
          helperUtility.createErrorObject( 400, 'Wrong type of keywords. Need an array of strings or number or empty array where string can be anything and numbers can have any digits.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getType: function( type ) {
      try {
        if( validatorUtility.isType(  type.toLowerCase()  ) ) {
          return  type.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong type. Need an existing type.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getPrefixType: function( prefixType ) {
      try {
        if( validatorUtility.isPrefixType(  prefixType.toLowerCase()  ) ) {
          return  prefixType.toLowerCase();
        } else {
          helperUtility.createErrorObject( 400, 'Wrong prefixType. Need an existing type or null.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getPrefixId: function( prefixId ) {
      try {
        if( validatorUtility.isPrefixId( prefixId ) ) {
          if( prefixId === "null" ) {
            return 0;
          }
          prefixId = Number( prefixId );
          return prefixId;
        } else {
          helperUtility.createErrorObject( 400, 'Wrong PrefixId. Need a 16 digits number or null.' );
        }
      } catch( error ) {
        throw error;
      }
    },

    getVersionFile: function( version ) {
      try {
        var defaultFile = _.get( PAGE.VERSIONS, 'latest', 'v1/PageUtility.js' );
        var versionFile = _.get( PAGE.VERSIONS, version, defaultFile );
        return versionFile;
      } catch( error ) {
        throw error;
      }
    }
  };

}
