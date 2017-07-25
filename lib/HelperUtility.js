module.exports = HelperUtility;


function HelperUtility() {

  return {
    // Create and throw an error object
    createErrorObject: function( code, message ) {
      try {
        // Create an error
        var error = new Error( message );
        error.name = code;
        // Throw an error
        throw error;
      } catch( error ) {
        throw error;
      }
    },

    // Create a response object
    createResponseObject: function( code, data ) {
      try {
        // Create a response
        var response = {};
        response.code = code;
        response.data = data;
        return response;
      } catch( error ) {
        throw error;
      }
    }
  };
}
