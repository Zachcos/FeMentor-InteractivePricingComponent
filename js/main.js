var priceLabel = document.querySelector('.price__value');
var viewsLabel = document.querySelector('.views__value');

window.oninput = function handleChange() {
  var x = document.querySelector('.slider');
  x.step = 25;

  // document.querySelector("#test").innerHTML = x.value;
  changeLabel(x.value)
}

function changeLabel(x) {
  if (x < 24) {
    priceLabel.innerHTML = '$8.00'
    viewsLabel.innerHTML = '10K'
  } else if (x < 49 ) {
    priceLabel.innerHTML = '$12.00'
    viewsLabel.innerHTML = '50K'
  } else if (x < 74) {
    priceLabel.innerHTML = '$16.00'
    viewsLabel.innerHTML = '100K'
  } else if (x < 100 ) {
    priceLabel.innerHTML = '$24.00'
    viewsLabel.innerHTML = '500K'
  } else {
    priceLabel.innerHTML = '$36.00'
    viewsLabel.innerHTML = '1M'
  }
}