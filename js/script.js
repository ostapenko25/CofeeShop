// Menu filter
var grid = document.getElementById('grid');
var btnAll = document.getElementById('show-all');
var btnAmer = document.getElementById('show-amer');
var btnLatte = document.getElementById('show-latte');
var btnFrappe = document.getElementById('show-frappe');

var allCoffee = document.getElementsByClassName('grid-item');
var amer = document.getElementsByClassName('amer');
var latte = document.getElementsByClassName('latte');
var frappe = document.getElementsByClassName('frappe');

function showAll() {	
	for (var i=0; i<allCoffee.length; i++) {		
	  allCoffee[i].style.display = 'block';	  	 
	}	
}

function showAmer() {	  
	  for (var i=0; i<amer.length; i++) {
	  amer[i].style.display = 'block';
	   }
	  for (var i=0; i<latte.length; i++) {
	  latte[i].style.display = 'none';	  
	   }
	  for (var i=0; i<frappe.length; i++) {
	  frappe[i].style.display = 'none';
	   }
	 }

function showLatte() {		
	   for (var i=0; i<amer.length; i++) {
	  amer[i].style.display = 'none';
	   }
	  for (var i=0; i<latte.length; i++) {
	  latte[i].style.display = 'block';	 
	   }
	  for (var i=0; i<frappe.length; i++) {
	  frappe[i].style.display = 'none';
	   }
	 }

function showFrappe() {	  
	   for (var i=0; i<amer.length; i++) {
	  amer[i].style.display = 'none';
	   }
	  for (var i=0; i<latte.length; i++) {
	  latte[i].style.display = 'none';	  
	   }
	  for (var i=0; i<frappe.length; i++) {	
	  frappe[i].style.display = 'block';
	  }
	 }

btnAll.addEventListener('click', showAll);
btnAmer.addEventListener('click', showAmer);
btnLatte.addEventListener('click', showLatte);
btnFrappe.addEventListener('click', showFrappe);

//Promo banners
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

// Fact-History
var factBtn = document.getElementById('btn-fact');
var histBtn = document.getElementById('btn-hist');
var factText = document.getElementById('facts-text');
var histText = document.getElementById('hist-text');

factBtn.addEventListener('click', showFact);
histBtn.addEventListener('click', showHist);

function showFact() {	 	
	factText.style.display = 'block';
	factText.style.transition = 'all 0.3s ease';
	factBtn.classList.add('active');
	
	histText.style.display = 'none';
	histBtn.classList.remove('active');
	}

function showHist() {	 
	histText.style.display = 'block';
	histText.style.transition = 'all 0.3s ease';
	histBtn.classList.add('active');
	
	factText.style.display = 'none';
	factBtn.classList.remove('active');		
	}



