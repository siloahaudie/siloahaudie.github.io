(function () {
  var raster = new Raster('graffiti');
  var loader = document.querySelector( '.loader' );
  var title = document.querySelector( 'h1.hero' );
  var subtitle = document.querySelector( 'span.hero' );

  // handler to do something once it is loaded:
  raster.onLoad = function() {
    setTimeout( function(){
      loader.classList.add( 'animated' );
      loader.classList.add( 'bounceOut' );
    }, 350);

    setInterval( function(){
      subtitle.classList.toggle( 'animated' );
      subtitle.classList.toggle( 'pulse' );
    }, 5000);
  };

})();
