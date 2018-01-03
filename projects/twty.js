// Items related  to project code TWNTY
var core = require('../core'),
			CryptoJS = require('crypto-js');
/**
 * Encrypt a given string with the 21st key
 * @param  {String} stringToEncrypt
 * @return {Void}
 */
function encrypt(stringToEncrypt){
	var key = '';
	var password = stringToEncrypt;

	// Encrypt
	var ciphertext = CryptoJS.AES.encrypt(password, key, {
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
		keySize: 256 / 32,
	});

	console.log('encrpyted string:');
	console.log(ciphertext.toString());

	var encryptedPassword =  ciphertext.toString();

	// Decrypt
	var decrypt  = CryptoJS.AES.decrypt(encryptedPassword, key);
	var plaintext = decrypt.toString(CryptoJS.enc.Utf8);
	console.log('decrypt:');
	console.log(plaintext);
}


// Exposes functions
module.exports = {
	encrypt : encrypt
};