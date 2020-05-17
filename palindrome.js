// Reverses a string
function reverse(string) {
	return Array.from(string).reverse().join("");
}


// Defines a Phrase Object
function Phrase(content) {
	this.content = content;

	this.palindrome = function palindrome() {
	  let processedContent = this.content.toLowerCase();
	  return processedContent === reverse(processedContent);
  };
}