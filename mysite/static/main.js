body = document.body;
street = document.getElementById("street");
classic = document.getElementById("classic");
soft = document.getElementById("soft");
console.log("started");
street.addEventListener("click", streetStores);
classic.addEventListener("click", classicStores);
soft.addEventListener("click", softStores);
function streetStores() {
    document.getElementById("bot").innerHTML = "You can shop at Tilly's or BooHooMan";
    console.log("hello");
}
function classicStores() {
    document.getElementById("bot").innerHTML = "You can shop at Uniqlo";
    console.log("hello");
}
function softStores() {
    document.getElementById("bot").innerHTML = "You can shop at Pacsun, H&M, or Uniqlo";
    console.log("hello");
}