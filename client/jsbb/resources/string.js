/**
* @class String
* @parent resources
 * Adds functions to String class.
*/

String.prototype.
/**
 * Trims whitespace off the string  
 */
trim = function() {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
};

String.prototype.
/**
 * Checks if string starts with given string.
 *	
 * @param {string} str The tested string
 * @return {boolean} true if string starts with given parameter string
 */
startsWith = function(str) {
	return this.indexOf(str) == 0;
};