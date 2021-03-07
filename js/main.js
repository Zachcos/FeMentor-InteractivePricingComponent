var priceLabel = document.querySelector('.price__value');
var viewsLabel = document.querySelector('.views__value');

window.oninput = function handleChange() {
  var x = document.querySelector('.slider');
  x.step = 25;

  // document.querySelector("#test").innerHTML = x.value;
  changeLabel(x.value)
}

function changeLabel(x) {
  var price;
  var views;
  
  if (x < 24) {
    price = 8;
    views = '10K';
  } else if (x < 49 ) {
    price = 12;
    views = '50K';
  } else if (x < 74) {
    price = 16;
    views = '100K';
  } else if (x < 100 ) {
    price = 24;
    views = '500K';
  } else {
    price = 36;
    views = '1M';
  }

  priceLabel.innerHTML = `$${price}.00`
  viewsLabel.innerHTML = `${views}`
}