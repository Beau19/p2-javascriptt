// let name1 = "Theo";
// let name2 = "Pascal";
// let name3 = "DonnyE";

let paragraaf = document.getElementById("para");

let name = ["Theo", "Pascal", "DonnyE"];

// paragraaf.innerText = name;

// paragraaf.innerText = name[1];

name.push("Dejan");

paragraaf.innerText = name;

name[2] = "Bryan Keizer";
paragraaf.innerText = name;

//wat is de lengte van mijn array?
paragraaf.innerText = name.length;