function calculate() {
    var buyingPrice = document.getElementById("buyingPrice").innerText;
    var sellingPrice = document.getElementById("sellingPrice").innerText;
    document.getElementById("difference").innerHTML =  buyingPrice - sellingPrice;
}