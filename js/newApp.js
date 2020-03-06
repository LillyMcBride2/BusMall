'use strict';
var imageElements = document.getElementsByTagName('img');
var product1 = 0;
var product2 = 1;
var product3 = 2;
var allPizzas = [];
var totalClicks = 0;
var rounds = 25;
// Pizza constructor
function Product(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allProducts.push(this);
}
// actually create our products
new Product('Bag', 'images/bag.jpg');
new Product('Banana Slicer', 'images/banana.jpg');
new Product('Tablet Stand', 'images/bathroom.jpg');
new Product('Toeless Boots', 'images/boots.jpg');
new Product('Breakfast Maker', 'images/breakfast.jpg');
new Product('Meatball Bubble Gum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Duck Muzzle', 'images/dog-duck.jpg');
new Product('Dragon Meat', 'images/dragon.jpg');
new Product('Pen Silverware', 'images/pen.jpg');
new Product('Pet Sweeper', 'images/pet-sweep.jpg');
new Product('Pizza Scissors', 'images/scissors.jpg');
new Product('Shark Sleeping Bag', 'images/shark.jpg');
new Product('Baby Sweeper', 'images/sweep.jpg');
new Product('Tauntain Sleeping Bag', 'images/tauntaun.jpg');
new Product('Unicorn Meat', 'images/unicorn.jpg');
new Product('Tentacle Flashdrive', 'images/usb.jpg');
new Product('Watering Can', 'images/water-can.jpg');
new Product('Wine Glass', 'images/wine-glass.jpg');

// Account for first three Products being seen
allProducts[product1].timesSeen++;
allProducts[product2].timesSeen++;
allProducts[product3].timesSeen++;

// create a function to store clicks

function imageWasClicked(event) {

  console.log('an image was clicked');
 // debugger;
  totalClicks++;
  if(event.srcElement.id === '1') {
    allProducts[product1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allProducts[product2].timesClicked++;
  } else if (event.srcElement.id === '3') {
    allProducts[product3].timesClicked++;
  }
  // pick from random Products to display and check against duplicates
  while((nextProduct1 === product1) || (nextProduct1 === product2) || (nextProduct1 === product3)) {
    nextProduct1 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProduct2 = Math.floor(Math.random() * allProducts.length);
  while((nextProduct2 === product1) || (nextProduct2 === product2) || (nextProduct2 === product3) || (nextProduct2 === nextProduct1)) {
    nextProduct2 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProduct3 = Math.floor(Math.random() * allProducts.length);
  while((nextProduct3 === product1) || (nextProduct3 === product2) || (nextProduct3 === product3) || (nextProduct3 === nextProduct1) || (nextProduct3 === nextProduct2)) {
    nextProduct3 = Math.floor(Math.random() * allProducts.length);
  }

  product1 = nextProduct1;
  allProducts[product1].timesSeen++;
  product2 = nextProduct2;
  allProducts[product2].timesSeen++;
  product3 = nextProduct3;
  allProducts[product3].timesSeen++;
 
  imageElements[0].src = allProducts[productIndex1].imageUrl;
  imageElements[1].src = allPizzas[productIndex2].imageUrl;
  imageElements[2].src = allProducts[productIndex3].imageUrl;

  if(totalClicks >= 5) {
    // we made it to 5 clicks
    var footerEl = document.getElementsByTagName('footer')[0];
    // loop through all the Pizza's and display how many times each one was picked
    if(footerEl.firstElementChild){
      footerEl.firstElementChild.remove();
    }
    var createPara = document.createElement('p');
    createPara.textContent = 'You picked things!';
    footerEl.appendChild(createPara);

  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do

for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}