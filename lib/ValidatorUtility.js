/*
A Utility to validate the client data
*/

module.exports = ValidatorUtility;

const PAGE = require( '../config/page.js' ).PAGE;
const helperUtility = require( './HelperUtility.js' )();

function ValidatorUtility() {

  return {

    isIds: function( ids ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.IDS );
        if( pattern.test( ids ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isId: function( id ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.ID );
        if( pattern.test( id ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isUri: function( uri ) {
      try{
        var pattern = new RegExp( PAGE.REGEX.URI );
        if( pattern.test( uri.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isUriAlias: function( uriAlias ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.URIALIAS );
        if( pattern.test( uriAlias.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isPageUrl: function( pageUrl ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.PAGEURL );
        if( pattern.test( pageUrl.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isUriPrefix: function( uriPrefix ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.URIPREFIX );
        if( pattern.test( uriPrefix.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isKeywords: function( keywords ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.KEYWORDS );
        if( pattern.test( keywords.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isType: function( type ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.TYPE );
        if( pattern.test( type.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isPrefixType: function( prefixType ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.PREFIXTYPE );
        if( pattern.test( prefixType.toLowerCase() ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    },

    isPrefixId: function( prefixId ) {
      try {
        var pattern = new RegExp( PAGE.REGEX.PREFIXID );
        if( pattern.test( prefixId ) ) {
          return true;
        } else {
          return false;
        }
      } catch( error ) {
        throw error;
      }
    }
  };
}
