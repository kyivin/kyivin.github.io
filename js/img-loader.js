// external js: isotope.pkgd.js, imagesloaded.pkgd.js

$(document).ready( function() {
  // init Isotope
  var $container = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    masonry: {
      columnWidth: 250, 
      isFitWidth: true,
      gutter: 40      
    }
  });
  // layout Isotope after each image loads
  $container.imagesLoaded().progress( function() {
    $container.isotope('layout');
  });  

});