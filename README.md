# Photo Album
Using javascript and DOM, change a photo album with the click of a button!

![demo](demo.gif)

## Objective
The objective of this short project is to get familiar with adding and removing elements using DOM, 
by adding and removing image elements from a photo album. 

## Difficulty
Easy

## Prerequisites
Understanding of HTML attributes such as "id" and "src"

Understanding of javascript functions

## The Task
You are starting off with a photo album website that is supposed to be filled with winter pictures, but there are some summer pictures in there. 
There is a button on the top that says "fix" that will run a javascript function on click. **It is your job to create the fix function.**
The fix function will use DOM to remove the summer pictures, as well as add some new winter pictures, using some of the photos in the winter folder.


## Part 1: Removing The Summer Photos
We start off with four photos that we need to remove. These photos are located in the 'photos' folder in the project.

The first image we will remove will be the coconut, which is located at 'photos/coconut.jpg'. Create a variable called 'coconut', and assign it to the HTML element with the ID "coconut".
```
var coconut = document.getElementById("coconut");
```
Now that we have assigned a variable to an element in the HTML, we can remove it using .remove():
```
coconut.remove();
```
Repeat these steps for the next three photos, which are 'coast.jpg', 'watermelon.jpg', and 'sunflowers.jpg'. If you want to see if everything works, refresh the page and press the fix button. 

## Part 2: Adding Winter Photos
Now, all of the summer photos are gone, and we can start adding in some winter photos. Three winter photos are already provided in the 'to-add' folder in the project.
The process of creating document elements is very similar to what we've done so far, using document.createElement(element name). Let's start by adding tree.jpg.
```
var tree = document.createElement("img");
```
With this, we have created an image element, but it has no attributes, so let's add some. First, add an id to the element, so we can refer to it later if we ever
need to. We can do this by using .setAttribute(attribute, value):
```
tree.setAttribute("id", "tree");
```
Since we're working with an img object, we also want to set the src attribute to the file path of the image we want it to be:
```
tree.setAttribute("src", "to-add/christmas tree.jpg");
```
Now that our tree element is ready to go, we need to append it to an existing object in the HTML in order for it to show up. The HTML already has a divider with 
the id "photos" to append them to, so we need to assign that divider to a variable before we can do anything with it in javascript.
```
var photos = document.getElementById("photos");
```
Finally, we can use .appendChild(element) to add our new element into the website.
```
photos.appendChild(tree);
```
Refresh the page and press the fix button to see it in action. Repeat these steps two more times for the next two photos, which are 'to-add/snowmen.jpg' and 'to-add/stockings.jpg'. 


