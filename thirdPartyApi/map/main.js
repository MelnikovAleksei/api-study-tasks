var L;

window.onload = function() {
  L.mapquest.key = 'fW3W0QaeyAM69Tjn8PpM3fCYkb18yFHY';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
	center: [55.75, 37.6],
	layers: L.mapquest.tileLayer('dark'),
	zoom: 12,
  });

  	map.addControl(L.mapquest.control({
		position: 'bottomright',
	}));
	map.addControl(L.mapquest.locatorControl({
		position: 'topleft',
	}));
	map.addControl(L.mapquest.trafficControl())
	L.marker([55.75, 37.6], {
		icon: L.mapquest.icons.marker({
		  primaryColor: '#22407F',
		  secondaryColor: '#3B5998',
		  shadow: true,
		  size: 'md',
		  symbol: 'A'
		})
	  })
	  .bindPopup('This is Moscow!')
	  .addTo(map);
}