$( function() {
    var $container = $('.gallery').isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: 250, 
        isFitWidth: true,
        gutter: 40      
      }
    });

  var iso = $container.data('isotope');
  $container.isotope('reveal', iso.items );
});