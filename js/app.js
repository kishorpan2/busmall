'use strict';
// Pull images from the html
var allImages = [];

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var randomArray = [];

//from HTML
var fromHtml = document.getElementById('pic');

// function generateArandomNumber(){
//   var randomOne = Math.floor(Math.random() * allImages.length);
//   var randomTwo = Math.floor(Math.random() * allImages.length);
//   var randomThree = Math.floor(Math.random() * allImages.length);
// }

function imageGenerator(name,path){
  this.imageName = name;
  this.filePath = path;
  this.numberOfTimes = 0;
  this.numberOfTimesClicked =0;
  allImages.push(this);
}
new imageGenerator('bag', './img/bag.jpg');
new imageGenerator('banana', './img/banana.jpg');
new imageGenerator('bathroom', './img/bathroom.jpg');
new imageGenerator('boots', './img/boots.jpg');
new imageGenerator('breakfast', './img/breakfast.jpg');
new imageGenerator('bubblegum', './img/bubblegum.jpg');
new imageGenerator('chair', './img/chair.jpg');
new imageGenerator('cthulhu', './img/cthulhu.jpg');
new imageGenerator('dog-duck', './img/dog-duck.jpg');
new imageGenerator('dragon', './img/dragon.jpg');
new imageGenerator('pen', './img/pen.jpg');
new imageGenerator('pet-sweep', './img/pet-sweep.jpg');
new imageGenerator('scissors', './img/scissors.jpg');
new imageGenerator('shark', './img/shark.jpg');
new imageGenerator('sweep', './img/sweep.jpg');
new imageGenerator('tauntaun', './img/tauntaun.jpg');
new imageGenerator('unicorn', './img/unicorn.jpg');
new imageGenerator('usb', './img/usb.jpg');
new imageGenerator('water-can', './water-can/bag.jpg');
new imageGenerator('wine-glass', './img/wine-glass.jpg');

// pick a random number from 0 to 19
// the random number is the index number into allImages array
// use the variables that grabbed the ids from the DOM we are going to assign the source to the file path on our objects
// img1.src = allImages[randomNumber].filepath


// confirm there are no duplicates
// while(lastDisplayed.includes(randomOne) || lastDisplayed.includes(randomTwo) || lastDisplayed.includes(randomThree) ||randomOne === randomTwo ||randomTwo || randomTwo === randomThree ||randomThree === randomOne){
randomArray.push(Math.floor(Math.random() * allImages.length));

randomArray.push(Math.floor(Math.random() * allImages.length));

randomArray.push(Math.floor(Math.random() * allImages.length));


// while (img1.alt === allImages[ramdom].imageName) {
//   var ramdom = Math.floor(Math.random() * allImages.length);
//   console.log('duplicate found');
// }
// while (img2.alt === allImages[ramdom].imageName) {
//   ramdom = Math.floor(Math.random() * allImages.length);
//   console.log('duplicate found');
// }
// while (img3.alt === allImages[ramdom].imageName) {
//   ramdom = Math.floor(Math.random() * allImages.length);
//   console.log('duplicate found');
// }
// imageGenerator();
function renderImage(){
  var src ='';
  for (var i = 0; i< 3; i++){
    var img =document.createElement('img');
    src = allImages[randomArray[i]].path;
    img.setAttribute('src',src);
    img.setAttribute('name',allImages[randomArray[i]].name);
    fromHtml.appendChild(img);
  }
}
renderImage();
