function fix() {
    let coconut = document.getElementById("coconut");
    coconut.remove();
    let watermelon = document.getElementById("watermelon");
    watermelon.remove();
    let coast = document.getElementById("coast");
    coast.remove();
    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove();

    let tree = document.createElement("img");
    tree.id = "tree";
    tree.src = "to-add/christmasTree.jpg";
    let snowmen = document.createElement("img");
    snowmen.id = "snowmen";
    snowmen.src = "to-add/snowmen.jpg";
    let stockings = document.createElement("img");
    stockings.id = "stockings";
    stockings.src = "to-add/stockings.jpg";

    let photos = document.getElementById("photos");
    photos.appendChild(tree);
    photos.appendChild(snowmen);
    photos.appendChild(stockings);

}