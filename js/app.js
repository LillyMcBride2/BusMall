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

new Product('Bag', images/bag.jpg);
new Product('Banana Slicer', images/banana.jpg);
new Product('Tablet Stand', images/bathroom.jpg);
new Product('Toeless Boots', images/boots.jpg);
new Product('Breakfast Maker', images/breakfast.jpg);
new Product('Meatball Bubble Gum', images/bubblegum.jpg);
new Product('Chair', images/chair.jpg);
new Product('Cthulhu', images/cthulhu.jpg);
new Product('Duck Muzzle', images/dog-duck.jpg);
new Product('Dragon Meat', images/dragon.jpg);
new Product('Pen Silverware', images/pen.jpg);
new Product('Pet Sweeper', images/pet-sweep.jpg);
new Product('Pizza Scissors', images/scissors.jpg);
new Product('Shark Sleeping Bag', images/shark.jpg);
new Product('Baby Sweeper', images/sweep.jpg);
new Product('Tauntain Sleeping Bag', images/tauntaun.jpg);
new Product('Unicorn Meat', images/unicorn.jpg);
new Product('Tentacle Flashdrive', images/usb.jpg);
new Product('Watering Can', images/water-can.jpg);
new Product('Wine Glass', images/wine-glass.jpg);