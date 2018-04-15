$( document ).ready(function() {
	var range = document.getElementById('range');
	var days = document.getElementById('days');

	noUiSlider.create(days, {
		start: 2,
		step: 1,
		connect: 'lower',
		range: {
			'min': 2,
			'max': 3
		},
		pips: { // Show a scale with the slider
			mode: 'values',
			values: [2, 3],
			stepped: true,
			density: 50
		}
	})

	noUiSlider.create(range, {
		start: [ 2 ],
		step: 1,
		connect: 'lower',
		range: {
			'min': 2,
			'max': 8
		},
		pips: { // Show a scale with the slider
			mode: 'values',
			values: [2, 3, 4, 5, 6, 7, 8],
			density: 6,
			stepped: true
		}
	});

	var ecoSpan = document.getElementById('price-eco');	
	var stdSpan = document.getElementById('price-std');	

 	var lang = document.documentElement.lang;

 	if (lang=="en") {
		price_eco = [22, 20, 19, 18, 17, 16, 14];
		price_std = [50, 36, 31, 27, 24, 21, 19];
	} else {
		price_eco = [620, 570, 530, 504, 480, 440, 390];
		price_std = [1390, 1010, 880, 745, 670, 590, 540];
	}

	function setOrderValues(pricingPlan) {
		var span;
		switch(pricingPlan) {
			case "Econom": 
				span=ecoSpan;
				if (lang=="ua") pricingPlan = "Економ"
				if (lang=="ru") pricingPlan = "Эконом"
				break;
			case "Standard":
				span=stdSpan;
				if (lang=="ua") pricingPlan = "Стандарт"
				if (lang=="ru") pricingPlan = "Стандарт"
				break;
		}

		document.getElementById('pricing-plan').innerHTML = pricingPlan;
		document.getElementsByName('pricing-plan')[0].value = pricingPlan;
		document.getElementById('guests-number').innerHTML = range.noUiSlider.get() | 0;
		document.getElementsByName('guests-number')[0].value = range.noUiSlider.get() | 0;
		document.getElementById('price').innerHTML = (range.noUiSlider.get() | 0)*(span.innerHTML | 0)*(days.noUiSlider.get() | 0);
		document.getElementsByName('price')[0].value = document.getElementById('price').innerHTML;
		document.getElementById('submit-form').style.display = "block";
	}

	$( "#eco-btn" ).click(function() {
		setOrderValues("Econom")
	});
	$( "#std-btn" ).click(function() {
		setOrderValues("Standard")
	});

	// When the slider value changes, update the input and span
	range.noUiSlider.on('update', function( values, handle ) {
		ecoSpan.innerHTML = price_eco[(values[handle] | 0)-2];
		stdSpan.innerHTML = price_std[(values[handle] | 0)-2];
		document.getElementById('submit-form').style.display = "none";
	});	

	days.noUiSlider.on('update', function( values, handle ) {
		var str = document.getElementById('price').innerHTML;
		if (values[handle]==2) {
			document.getElementById('price').innerHTML = ((str | 0) * 2 / 3); 
		} else {
			document.getElementById('price').innerHTML = ((str | 0) * 3 / 2);
		}
		document.getElementsByName('duration')[0].value = (values[handle] | 0) + " days";
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
	
	var lang = document.documentElement.lang;
	if (lang=="en") {
		document.getElementsByName('price')[0].value += " USD";

	} else {
		document.getElementsByName('price')[0].value += " UAH";
	}

	document.getElementById("subject").value = "[New order] from " + 
		document.getElementById("email").value;

	document.getElementById("submit-form").submit();
}