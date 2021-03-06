let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// Return a URL-friendly version fo a stirng.
//   Example: "North Dakota" => "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}

function fullUrl(string) {
	return "https://example.com/" + string;
}

function dakotas(elements) {
	return elements.filter(element => element.toLowerCase().includes("dakota"));
}

function lengthTwo(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}

function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(fullUrl(urlify(element)));
	});
	return urls;
}

console.log(imperativeUrls(states));

function functionalUrls(elements) {
	return elements.map(element => fullUrl(urlify(element)));
}

console.log(functionalUrls(states));


function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
      if (element.split(/\s+/).length === 1) {
      	singles.push(element);
      }
	});
	return singles;
}

function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1)
}

console.log(imperativeSingles(states));

console.log(functionalSingles(states));

console.log(dakotas(states));

console.log(lengthTwo(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: impperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
      total += n;
	});
	return total;
}

console.log(imperativeSum(numbers));

//sum: functional solution
function functionalSum(elements) {
	return elements.reduce((total, n) => total += n);
}

console.log(functionalSum(numbers));

//length: imperative solution
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}

//lengths: functional solution
function functionalLengths(elements) {
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length; return lengths;
	}, {});
}

console.log(imperativeLengths(states));

console.log(functionalLengths(states));

// returns the product of an array

function functionalProduct(elements) {
	return elements.reduce((total, element) => total *= element);
}

console.log(functionalProduct(numbers));



























