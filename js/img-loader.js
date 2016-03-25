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


  //PhotoSwipe

  var $pswp = $('.pswp')[0];
  var image = [];

  $('.gallery').each( function() {
      var $pic     = $(this),
          getItems = function() {
              var items = [];
              $pic.find('a').each(function() {
                  var $href   = $(this).attr('href'),
                      $size   = $(this).data('size').split('x'),
                      $width  = $size[0],
                      $height = $size[1];

                  var item = {
                      src : $href,
                      w   : $width,
                      h   : $height
                  }

                  items.push(item);
              });
              return items;
          }

      var items = getItems();
      console.log(items.length);

      $.each(items, function(index, value) {
          image[index]     = new Image();
          image[index].src = value['src'];
      });

      $pic.on('click', 'figure', function(event) {
          event.preventDefault();
          
          var $index = $(this).index();
          var options = {
              index: $index,
              bgOpacity: 0.7,
              showHideOpacity: true
          }

          var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
          lightBox.init();
      });
  });


});