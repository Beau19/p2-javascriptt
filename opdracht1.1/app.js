let paragraaf = document.getElementById("winkelmand")
let shop = ["Bananen", "Whisky", "Chips", "Bonen", "Aardappelen"];

paragraaf.innerText ="er zitten "+  shop.length + " items in onze array";

paragraaf.innerText = shop

// paragraaf.innerText = Bonen;

console.log("3, Bonen staan op de vierde plek van uw winkelmand");

function product_toevoegen()

document.getElementById("shop").innerHTML = shop.toString();

const winkelmand = ["Bananen", "Whisky", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
winkelmand.reverse();