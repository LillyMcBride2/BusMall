'use strict';
var productElement = document.getElementsByClassName('product');
var product1 = 0;
var product2 = 1;
var product3 = 2;
var allProducts = [];
var totalClicks = 0;
var rounds = 25;

//Constuctor function
function Product(name, url) {
this.name = name;
this.url = url;
this.timesCLicked = 0;
this.timesShown = 0;
allProducts.push(this);
}

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

function productClick(event) {
    totalClicks++;
    if(event.srcElement.id === '1') {
      allProducts[product1].timesClicked++;
    }
    else if (event.srcElement.id === '2') {
      allProducts[product2].timesClicked++;
    }
    else if (event.srcElement.id === '3') {
      allProducts[product3].timesClicked++;
    }
    // Choose random product
    var nextProduct1 = Math.floor(Math.random() * allProducts.length);
    // Prevent duplicate image on this and next rotation
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
  


    if(totalClicks >= rounds) {
      // We've reached the maximum number of clicks 
      var resultsElement = document.getElementsByTagName('aside')[0];
      if(resultsElement.firstElementChild){
        resultsElement.firstElementChild.remove();
      }
      var title = document.createElement('h2');
      title.textContent = 'Results';
      resultsElement.appendChild(title);
      var createUL = document.createElement('ul');
      for (var i=0; i < allProducts.length; i++){
        var createLI = document.createElement('li');
        createLI.textContent = allProducts[i].name + ' had ' + allProducts[i].timesClicked + ' votes and was shown ' + allProducts[i].timesSeen + ' times.';
        createUL.appendChild(createLI);
      }
      resultsElement.appendChild(createUL);
    if(totalClicks === rounds) {
        for (var j = 0; j < productElements.length; j++) {
          productElement[j].removeEventListener('click', productClick());
        }
      }
    }
    }

  // Create even listener to run function when a product is clicked
  for (var i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener('click', productClick());
  }
