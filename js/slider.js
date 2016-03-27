$( document ).ready(function() {
	var range = document.getElementById('range');

	noUiSlider.create(range, {
		start: [ 2 ],
		step: 1,
		connect: 'lower',
		range: {
			'min': 2,
			'max': 9
		},
		pips: { // Show a scale with the slider
			mode: 'values',
			values: [2, 3, 4, 5, 6, 7, 8, 9],
			density: 6,
			stepped: true
		}
	});

	var ecoSpan = document.getElementById('price-eco');	
	var stdSpan = document.getElementById('price-std');	
	var prmSpan = document.getElementById('price-prm');	

 	var lang = document.documentElement.lang;

 	if (lang=="en") {
		price_eco = [18, 17, 16, 15, 14, 13, 12, 11];
		price_std = [28, 27, 26, 25, 24, 23, 22, 21];
		price_prm = [38, 37, 36, 35, 34, 33, 32, 31];
	} else {
		price_eco = [180, 170, 160, 150, 140, 130, 120, 110];
		price_std = [280, 270, 260, 250, 240, 230, 220, 210];
		price_prm = [380, 370, 360, 350, 340, 330, 320, 310];
	}

	function setOrderValues(pricingPlan) {
		var span;
		switch(pricingPlan) {
			case "Econom": 
				span=ecoSpan;
				if (lang=="ua") pricingPlan = "Економ"
				break;
			case "Standard":
				span=stdSpan;
				if (lang=="ua") pricingPlan = "Стандарт"
				break;
			case "Premium":
				span=prmSpan;
				if (lang=="ua") pricingPlan = "Преміум"
				break;
		}

		document.getElementById('pricing-plan').innerHTML = pricingPlan;
		document.getElementsByName('pricing-plan')[0].value = pricingPlan;
		document.getElementById('guests-number').innerHTML = range.noUiSlider.get() | 0;
		document.getElementsByName('guests-number')[0].value = range.noUiSlider.get() | 0;
		document.getElementById('price').innerHTML = (range.noUiSlider.get() | 0)*(span.innerHTML | 0);
		if (lang=="en") {
			document.getElementById('price').innerHTML += " $";
		} else {
		document.getElementById('price').innerHTML += " ₴";
		}
		document.getElementsByName('price')[0].value = document.getElementById('price').innerHTML

		document.getElementById('submit-form').style.display = "block";
	}

	$( "#eco-btn" ).click(function() {
		setOrderValues("Econom")
	});
	$( "#std-btn" ).click(function() {
		setOrderValues("Standard")
	});
	$( "#prm-btn" ).click(function() {
		setOrderValues("Premium")
	});

	// When the slider value changes, update the input and span
	range.noUiSlider.on('update', function( values, handle ) {
		ecoSpan.innerHTML = price_eco[(values[handle] | 0)-2];
		stdSpan.innerHTML = price_std[(values[handle] | 0)-2];
		prmSpan.innerHTML = price_prm[(values[handle] | 0)-2];
		document.getElementById('submit-form').style.display = "none";
	});	

});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function placeOrder() {
	if (!isEmail(document.getElementById("email").value)) {
		 alert('Enter valid email address');
		 return;
	}

	document.getElementById("subject").value = "[New order] from " + 
		document.getElementById("email").value;

	document.getElementById("submit-form").submit();
}