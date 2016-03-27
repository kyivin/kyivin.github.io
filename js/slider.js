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
});