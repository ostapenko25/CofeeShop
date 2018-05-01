
// Menu filter
var itemEls = document.getElementById('item-elems');
var filterEls = document.getElementById('filter-elems');
var filterMenu = filterEls.getElementsByClassName('menu__tag');

for (var i=0; i<filterMenu.length; i++) {
  var items = itemEls.getElementsByClassName('grid-item');
  filterMenu[i].addEventListener('click', filt);
}

function filt() {
  var items = itemEls.getElementsByClassName('grid-item');
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
} 


////Promo banners
var promoImg1 = document.getElementById('promoimg1');
var promoImg2 = document.getElementById('promoimg2');
var promoImg3 = document.getElementById('promoimg3');
var promoBtn1 = document.getElementById('promobtn1');
var promoBtn2 = document.getElementById('promobtn2');
var promoBtn3 = document.getElementById('promobtn3');

promoBtn1.addEventListener('click', showPromo1);
promoBtn1.addEventListener('mouseover', showPromo1);
promoBtn2.addEventListener('click', showPromo2);
promoBtn2.addEventListener('mouseover', showPromo2);
promoBtn3.addEventListener('click', showPromo3);
promoBtn3.addEventListener('mouseover', showPromo3);

function showPromo1() {	  
	promoImg1.style.display = 'block';
	promoImg2.style.display = 'none';
	promoImg3.style.display = 'none';
	}

function showPromo2() {	  
	promoImg1.style.display = 'none';
	promoImg2.style.display = 'block';
	promoImg3.style.display = 'none';
	}

function showPromo3() {	  
	promoImg1.style.display = 'none';
	promoImg2.style.display = 'none';
	promoImg3.style.display = 'block';
	}
