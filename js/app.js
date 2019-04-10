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
  this.views = 0;
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
new imageGenerator('water-can', './img/water-can.jpg');
new imageGenerator('wine-glass', './img/wine-glass.jpg');


// pick a random number from 0 to 19
// the random number is the index number into allImages array
// use the variables that grabbed the ids from the DOM we are going to assign the source to the file path on our objects
// img1.src = allImages[randomNumber].filepath


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
// function renderImage(){
//   var src ='';
//   for (var i = 0; i< 3; i++){
//     var img =document.createElement('img');
//     src = allImages[randomArray[i]].filePath;
//     img.setAttribute('src',src);
//     img.setAttribute('name',allImages[randomArray[i]].imageName);
//     fromHtml.appendChild(img);
//   }
// }
var totalNumberClicks = 0;
function renderImage(imageElement){
  var random = Math.floor(Math.random()*allImages.length);
  console.log('this is imageElement',imageElement);
  if (randomArray.includes(random)){
    renderImage(imageElement);
  } else{
    if (randomArray.length > 6){
      randomArray.shift();
    }
    randomArray.push(random);
    console.log('randomArray',randomArray);
    imageElement.src = allImages[random].filePath;
    console.log('src',imageElement.src);
    allImages[random].views ++;
    console.log('views' , allImages[random].views);
    fromHtml.alt = allImages[random].imageName;
    fromHtml.title = allImages[random].imageName;
    
  }

}
fromHtml.addEventListener('click', choosenImage);

function choosenImage(){
  totalNumberClicks++;
  console.log('image count ' + totalNumberClicks);
  if (totalNumberClicks===25){
    fromHtml.removeEventListener('click', choosenImage);
  }
  renderImage(img1);
  renderImage(img2);
  renderImage(img3);
  
}
// we want to add a vote to the image that was clicked

renderImage(img1);
renderImage(img2);
renderImage(img3);


choosenImage();
//event listner on each images total3
//when here is a click increase find 
//numberOfTimesClicked
// which image is clicked need a for loop that compare name of the image with the name of the image

