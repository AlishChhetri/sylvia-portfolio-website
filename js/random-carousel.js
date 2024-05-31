document.addEventListener('DOMContentLoaded', function() {
    var carouselItems = document.querySelectorAll('.carousel-inner .item');
    var indicators = document.querySelectorAll('.carousel-indicators li');

    // Convert NodeList to Array
    carouselItems = Array.from(carouselItems);
    indicators = Array.from(indicators);

    // Shuffle the carousel items
    shuffleArray(carouselItems);

    // Reorder the carousel items in the DOM
    var carouselInner = document.querySelector('.carousel-inner');
    carouselItems.forEach(function(item) {
        carouselInner.appendChild(item);
    });

    // Update the data-slide-to attribute of the indicators
    indicators.forEach(function(indicator, index) {
        indicator.setAttribute('data-slide-to', index);
    });

    // Set the first item as active
    carouselItems[0].classList.add('active');
    indicators[0].classList.add('active');
});

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}