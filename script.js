// Your JavaScript code goes here
function swap() {
    var title = document.getElementById("title");
    title.textContent = "My Summer Photo Album";

    var description = document.getElementById("description");
    description.textContent = "This is a photo album about summer!";

    var body = document.body;
    body.style.backgroundImage = "url(summer/background.jpg)";

    var photo1 = document.getElementById("photo1");
    photo1.src = "summer/coconut.jpg";  

    var photo2 = document.getElementById("photo2");
    photo2.src = "summer/sunflowers.jpg";
    
    var photo3 = document.getElementById("photo3");
    photo3.src = "summer/coast.jpg";
    
    var photo4 = document.getElementById("photo4");
    photo4.src = "summer/watermelon.jpg";
    
    var photo5 = document.getElementById("photo5");
    photo5.src = "summer/beach.jpg";  
}