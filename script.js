// Your JavaScript code goes here
function fix() {
    var coconut = document.getElementById("coconut");
    coconut.remove();

    var coast = document.getElementById("coast");
    coast.remove();

    var watermelon = document.getElementById("watermelon");
    watermelon.remove();

    var sunflowers = document.getElementById("sunflowers");
    sunflowers.remove();


    var tree = document.createElement("img");
    tree.setAttribute("id", "tree");
    tree.setAttribute("src", "to-add/christmas tree.jpg")

    var snowmen = document.createElement("img");
    snowmen.setAttribute("id", "snowmen");
    snowmen.setAttribute("src", "to-add/snowmen.jpg");

    var stockings = document.createElement("img");
    stockings.setAttribute("id", "stockings");
    stockings.setAttribute("src", "to-add/stockings.jpg");

    var photos = document.getElementById("photos");
    photos.appendChild(tree);
    photos.appendChild(snowmen);
    photos.appendChild(stockings);
}