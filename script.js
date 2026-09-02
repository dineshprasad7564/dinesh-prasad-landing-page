// This file puts the current year in the footer automatically.

// Step 1: get the empty span from the footer
var yearBox = document.getElementById("year");

// Step 2: put the current year inside it
yearBox.textContent = new Date().getFullYear();
