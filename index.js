// First brandSLide
let slideIndexOne = 1;
showSlidesOne(slideIndexOne);

function plusSlidesOne(n) {
  showSlidesOne(slideIndexOne += n);
}

function currentSlide(n) {
  showSlidesOne(slideIndexOne = n);
}
function showSlidesOne(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndexOne-1].style.display = "block";
}

// Second BrandSlide
let slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);

function plusSlidesTwo(n) {
  showSlidesTwo(slideIndexTwo += n);
}

function currentSlide(n) {
  showSlidesTwo(slideIndexTwo = n);
}
function showSlidesTwo(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndexTwo = 1}
  if (n < 1) {slideIndexTwo = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndexTwo-1].style.display = "block";
}

// Third Brand Slide 
let slideIndexThree = 1;
showSlidesThree(slideIndexThree);

function plusSlidesThree(n) {
  showSlidesThree(slideIndexThree += n);
}

function currentSlide(n) {
  showSlidesThree(slideIndexThree = n);
}
function showSlidesThree(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndexThree = 1}
  if (n < 1) {slideIndexThree = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndexThree-1].style.display = "block";
}


let pantaloon = document.getElementById("pantaloon");
pantaloon.addEventListener("click",()=>{
let itemLs = new Array(2);
itemLs[0]="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTPANT66355366FA5F7F/0x1920/70/4.png?imwidth=320&impolicy=hq";
itemLs[1]="Pantaloons Gift Card";
localStorage.setItem("itemLs",JSON.stringify(itemLs));
location.href="items.html";
})
// second 
// let pantaloon = document.getElementById("pantaloon");
// pantaloon.addEventListener("click",()=>{
// let itemLs = new Array(2);
// itemLs[0]="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTPANT66355366FA5F7F/0x1920/70/4.png?imwidth=320&impolicy=hq";
// itemLs[1]="Pantaloons Gift Card";
// localStorage.setItem("itemLs",JSON.stringify(itemLs));
// location.href="items.html";
// })
// // third
// let pantaloon = document.getElementById("pantaloon");
// pantaloon.addEventListener("click",()=>{
// let itemLs = new Array(2);
// itemLs[0]="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTPANT66355366FA5F7F/0x1920/70/4.png?imwidth=320&impolicy=hq";
// itemLs[1]="Pantaloons Gift Card";
// localStorage.setItem("itemLs",JSON.stringify(itemLs));
// location.href="items.html";
// })
// // forth
// let pantaloon = document.getElementById("pantaloon");
// pantaloon.addEventListener("click",()=>{
// let itemLs = new Array(2);
// itemLs[0]="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTPANT66355366FA5F7F/0x1920/70/4.png?imwidth=320&impolicy=hq";
// itemLs[1]="Pantaloons Gift Card";
// localStorage.setItem("itemLs",JSON.stringify(itemLs));
// location.href="items.html";
// })