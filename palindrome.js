// Reverses a string
function reverse(string) {
	return Array.from(string).reverse().join("");
}


// Defines a Phrase Object
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
  	return string.toLowerCase();
  }

  //Returns content process for palindrom testing
  this.processedContent = function processedContent() {
  	return this.processor(this.content);
  }
  
  this.palindrome = function palindrome() {
	return this.processedContent() === reverse(this.processedContent());
  }

  this.louder = function louder() {
  	return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	this.processedContent = function processedContent() {
  	  return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();