let priceLabel = document.querySelector('.price__value');
let viewsLabel = document.querySelector('.views__value');
let toggle = document.querySelector('#toggle');

window.oninput = function handleChange() {
  let x = document.querySelector('.slider');
  x.step = 25;
  changeLabel(x.value)
}

function changeLabel(x) {
  let price;
  let views;
  
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

  if (toggle.checked) {
    price = price * .75
  }

  priceLabel.innerHTML = `$${price}.00`
  viewsLabel.innerHTML = `${views}`
}