$( function() {
    var $container = $('.gallery').isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: 250, 
        isFitWidth: true,
        gutter: 40      
      }
    });

  var iso = $container.data('gallery');
  $container.isotope('reveal', iso.items );
});