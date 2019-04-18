
(function ($, root, undefined) {

    $(function () {

        'use strict';

        var $window = $(window);
        var $body = $('body');
        var $header = $('header');




        // mobile menu button
        var $menu_button = $('#menu_button');
        var $nav = $('nav ul');
        $menu_button.on('click', function(e){
            e.preventDefault();
            $nav.toggleClass('menu_visible');
        });

        // if press escape key, hide menu
        $(document).on('keydown', function(e){
            if(e.keyCode == 27 ){
                $nav.removeClass('menu_visible');
            }
        })

        $('#main').on('click', function() {
            $nav.removeClass('menu_visible');
        });


        ////////////////////////////
        // animate sliding down page
    	$('.scroll_link').on('click', function(e){
    		e.preventDefault();

    		var $this = $(this);
    		var $href = $this.attr('href');
    		var $hash = $href.split('#')[1];

    		if (typeof $hash !== 'undefined') {
    			var $location = $('#' + $hash);
    			if($location.length  > 0) {
                    var $scrollPosition = $location.offset().top;
                    if ($header.length > 0) {
                        $scrollPosition -= $header.height();
                    }
    				$("html, body").animate({ scrollTop: $scrollPosition }, 1000);
    			} else {
    				window.location.href = $href;
    			}
    		} else {
    			window.location.href = $href;
    		}
    	});
        ////////////////////////////
        // animate sliding down page







        // SLIDER
        // SLIDER

        $('.slick_slider').slick({
            dots: true,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1000,
            cssEase: 'ease-in-out',
            pauseOnHover: false
        });
        // SLIDER
        // SLIDER




        // MAP
        // MEMBERS MAP
        if (typeof google != 'undefined'){
        if (typeof map_location != 'undefined') {

            var map_theme = [{"featureType": "administrative","elementType": "all","stylers": [{"saturation": "-100"}]},{"featureType": "administrative.province","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "landscape","elementType": "all","stylers": [{"saturation": -100},{"lightness": 65},{"visibility": "on"}]},{"featureType": "poi","elementType": "all","stylers": [{"saturation": -100},{"lightness": "50"},{"visibility": "simplified"}]},{"featureType": "road","elementType": "all","stylers": [{"saturation": "-100"}]},{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial","elementType": "all","stylers": [{"lightness": "30"}]},{"featureType": "road.local","elementType": "all","stylers": [{"lightness": "40"}]},{"featureType": "transit","elementType": "all","stylers": [{"saturation": -100},{"visibility": "simplified"}]},{"featureType": "water","elementType": "geometry","stylers": [{"hue": "#ffff00"},{"lightness": -25},{"saturation": -97}]},{"featureType": "water","elementType": "labels","stylers": [{"lightness": -25},{"saturation": -100}]}];

            var map_options = {
                zoom: 15,
                mapTypeControl: true,
                scrollwheel: false,
                draggable: true,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: map_theme
            };


            var location_map_container = $('#map_container');
            location_map_container.css({
                width : '100%'
            })

            var location_map = new google.maps.Map(location_map_container.get(0), map_options);
            var latlng = new google.maps.LatLng(  map_location.lat, map_location.lng   );
            var infowindow = new google.maps.InfoWindow({content: ''});
            var marker = new google.maps.Marker({
                position: latlng,
                map: location_map,
                optimized: false
            });

            marker.addListener('click', function(){
                infowindow.setContent( map_location.title );
                infowindow.open(location_map, this);
            })

            location_map.setCenter( latlng );



        };
        }; // if google is defined
        // END OF MAP







    });

})(jQuery, this);
