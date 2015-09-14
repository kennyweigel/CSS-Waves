(function() {
	console.log("'Allo 'Allo!");

	var element = document.querySelector('.wave-container');

	element.addEventListener('click', function() {
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		} else {
			element.classList.add('active');
		}
	});
})();