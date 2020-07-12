/*
  Email obfuscation for Editorial, compiled/revised by Middle Bear
  middlebear.org | github.com/middlebear
  Free for personal and commercial use under the CCA 3.0 license (/license.txt
  and http://creativecommons.org/licenses/by/3.0/)
  
  this technique courtesy of Andrew Lock & Jesse Li
  from: https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/
  and   https://blog.jse.li/posts/cloudflare-scrape-shield/
*/

function encodeEmail(email, key) {
  let encodedString = make2Digits(key.toString(16)); // hex encode the key

  for(var n=0; n < email.length; n++) {           // loop through every character in the email
    let charCode   = email.charCodeAt(n);         // get the code (in decimal) for the nth character
    let encoded    = charCode ^ key;              // XOR the character with the key    
    encodedString += make2Digits(encoded.toString(16)); // hex encode the result, and append to the output string
  }
  return encodedString;
}

function make2Digits(value) {
  return (value.length === 1 ? ('0' + value) : value);
}

function decodeEmail(encodedString) {
  let email = "",                                 // holds the final output
    keyInHex = encodedString.substr(0, 2),        // extract the first 2 letters
    key = parseInt(keyInHex, 16);                 // convert the hex-encoded key into decimal

  for (var n = 2; n < encodedString.length; n += 2) { // Loop through the remaining encoded characters in steps of 2
    let charInHex = encodedString.substr(n, 2);   // get the next pair of characters
    let char      = parseInt(charInHex, 16);      // convert hex to decimal
    let output    = char ^ key;                   // XOR the character with the key to get the original character
    email        += String.fromCharCode(output);  // append the decoded character to the output
  }
  return email;
}

function updateMailToAnchor(el) {
  let decoded     = decodeEmail(el.dataset.code); // decode the email, using the decodeEmail() function from before
  el.textContent  = decoded;                      // replace the text (displayed) content
  el.href         = 'mailto:' + decoded;          // set the link to be a "mailto:" link
}

// find all tags with an .eml-protected class and a data-code attribute
document.querySelectorAll(".eml-protected[data-code]").forEach(function(el) {
  el.addEventListener('click', function(e) { 
    updateMailToAnchor(this);
    e.preventDefault();                           // TODO: 'undo' preventDefault() after first click
  });
});

