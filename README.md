# Photo Album
Using javascript and DOM, change text and images with the click of a button!

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

