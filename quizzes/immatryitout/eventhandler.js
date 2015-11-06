// Global Variables

var introduction = document.getElementById("intro");

var section1 = document.getElementById("sect1");

var section2 = document.getElementById("sect2");

var section3 = document.getElementById("sect3");

var conclusion = document.getElementById("end");

var output = document.getElementById("output-target")

var sections = document.getElementsByTagName("section");

var header = document.getElementById("page-title");

var guineaPig = document.getElementById("guinea-pig");

// Click events on sections handled here //

for (var i = 0; i < sections.length; i++) {
	sections[i].addEventListener("click", function(event) {
		output.innerHTML = event.target.innerHTML;
	})
};

// Hover events //

header.addEventListener("mouseover", function(event) {
	output.innerHTML = "You moved your mouse over the header";	
})

header.addEventListener("mouseout", function(event) {
	output.innerHTML = "You left me!!";	
})

// Buttons //

var colour = document.getElementById("add-color");

colour.addEventListener("click", function() {
	guineaPig.classList.toggle("blue");
})

var hulk = document.getElementById("make-large");

hulk.addEventListener("click", function() {
	guineaPig.classList.toggle("big");
})

var addBorder = document.getElementById("add-border");

addBorder.addEventListener("click", function() {
	guineaPig.classList.toggle("border-me");
})

var rounded = document.getElementById("add-rounding");

rounded.addEventListener("click", function() {
	guineaPig.classList.toggle("round-it");
})




