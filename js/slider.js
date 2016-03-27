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

	var ecoSpan = document.getElementById('price_eco');	
	var stdSpan = document.getElementById('price_std');	
	var prmSpan = document.getElementById('price_prm');	

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


	// When the slider value changes, update the input and span
	range.noUiSlider.on('update', function( values, handle ) {
		ecoSpan.innerHTML = price_eco[(values[handle] | 0)-2];
		stdSpan.innerHTML = price_std[(values[handle] | 0)-2];
		prmSpan.innerHTML = price_prm[(values[handle] | 0)-2];
	});	
});