'use strict';
// Pull images from the html
var allImages = [];
var votes =[];
var names =[];
var imageChart =[];

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
//
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
    imageElement.name = allImages[random].imageName;
    console.log('src',imageElement.src);
    allImages[random].views ++;
    console.log('views' , allImages[random].views);
    fromHtml.alt = allImages[random].imageName;
    fromHtml.title = allImages[random].imageName;

  }

}
fromHtml.addEventListener('click', choosenImage);

function choosenImage(){
  var selectedImg = window.event.srcElement;
  totalNumberClicks++;
  console.log('image count ' + totalNumberClicks);
  //change it back to 25
  if (totalNumberClicks===25){
    tallyVote(selectedImg);
    resultsOfPoll();
    fromHtml.removeEventListener('click', choosenImage);
  }
  renderImage(img1);
  renderImage(img2);
  renderImage(img3);
  tallyVote(selectedImg);
}
// we want to add a vote to the image that was clicked

renderImage(img1);
renderImage(img2);
renderImage(img3);

//event listner on each images total3
//when here is a click increase find
//numberOfTimesClicked
// which image is clicked need a for loop that compare name of the image with the name of the image
// images.addEventListener('click', selectedImage);

// for(var i = 0; i < allImages.length; i++) {
//   if(event.target.altText === allImages[i].altText) {
//     allimages[i].votes++;
//     updateChartArrays();
//   }
// }
// if (numberOfTimesClicked < 1) {
//   section.removeEventListener('click', newSet);
function tallyVote(thisImage) {
  for (var i = 0; i < allImages.length; i++) {
    if (thisImage.name === allImages[i].imageName) {
      allImages[i].numberOfTimesClicked++;
      //change it back to 25
      if (totalNumberClicks===25){
        //
      }
      else{
        imageGenerator();
      }
    }
  }
}
console.log('this is the votes', tallyVote);
document.getElementById('vote').addEventListener('click', function(event) {
  if (event.target.id !== 'vote') {
    tallyVote(event.target.id);
  }
});

//to display results
function resultsOfPoll(){
  var table = document.getElementById('poll');
  var rwEl = document.createElement('tr');
  var daEl = document.createElement('th');
  daEl.textContent = 'Image Name';
  rwEl.appendChild(daEl);
  daEl = document.createElement('th');
  daEl.textContent = 'Views';
  rwEl.appendChild(daEl);
  daEl = document.createElement('th');
  daEl.textContent = 'Votes';
  rwEl.appendChild(daEl);
  table.appendChild(rwEl);
  for(var i =0 ; i <allImages.length;i++){
    rwEl = document.createElement('tr');
    daEl = document.createElement('td');
    daEl.textContent = allImages[i].imageName;
    rwEl.appendChild(daEl);
    daEl = document.createElement('td');
    daEl.textContent = allImages[i].views;
    rwEl.appendChild(daEl);
    daEl = document.createElement('td');
    daEl.textContent = allImages[i].numberOfTimesClicked;
    rwEl.appendChild(daEl);
    table.appendChild(rwEl);
  }
}


//Chart Stuff
var data = {
  labels: names,
  datasets: [
    {
      label: 'Votes per Product',
      data: votes,
      backgroundColor: [
        'rgb(251,18,0)',
        'rgb(232,162,90)',
        'rgb(255,117,0)',
        'rgb(202,116,110)',
        'rgb(205,195,0)',
        'rgb(259,205,200)',
        'rgb(232,218,0)',
        'rgb(192,255,0)',
        'rgb(68,232,100)',
        'rgb(0,255,35)',
        'rgb(0,255,152)',
        'rgb(210,232,189)',
        'rgb(0,210,255)',
        'rgb(100,110,232)',
        'rgb(0,33,255)',
        'rgb(0,80,255)',
        'rgb(131,0,232)',
        'rgb(216,0,255)',
        'rgb(232,0,195)',
        'rgb(245,0,183)'
      ],

      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ]
    }]
};

function drawChart(){
  var ctx = document.getElementById('vote').getContext('2d');
  imageChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 20,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
}

