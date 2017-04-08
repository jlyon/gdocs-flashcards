angular.module('start')

    .directive('pcLocate', function ($rootScope, $state) {
        return {
            restrict: 'E',
            /*scope: {
             state: '=',
             requireAddress: '=',
             place: '@',
             city: '=',
             state: '='
             },*/
            templateUrl: 'views/pc-locate.html',
            link: function ($scope, $element, $attrs, place) {
                $attrs.requireAddress = $attrs.requireAddress != undefined && $attrs.requireAddress == "" ? true : false;
                $scope.geolocation = navigator.geolocation;
                $scope.geolocationLoading = false;

                var defaultBounds = null
                /*if ($rootScope.location.bounds != undefined) {
                 var points = JSON.parse($rootScope.location.bounds);
                 defaultBounds = new google.maps.LatLngBounds(
                 new google.maps.LatLng(parseFloat(points.north), parseFloat(points.west)),
                 new google.maps.LatLng(parseFloat(points.south), parseFloat(points.east)));
                 console.log(points);
                 var pt = new google.maps.LatLng($rootScope.location.lat, $rootScope.location.lng);
                 console.log(pt);
                 console.log('CONTAINS ', defaultBounds.contains(pt) );
                 }*/

                var options = {
                    types: ['(cities)'],
                    componentRestrictions: {country: 'us'},
                    // bounds: defaultBounds
                };
                var gPlace = new google.maps.places.Autocomplete($element.find('.input-lg')[0], options);

                // Add destroy
                $scope.$on('$destroy', function () {
                    // @TODO remove CSS + empty .pac-container divs
                    // autocomplete.unbindAll(gPlace);
                    // $element.find('.input-lg')[0].remove();
                    // google.maps.event.clearInstanceListeners(gPlace);
                });

                google.maps.event.addListener(gPlace, 'place_changed', function () {
                    $scope.chosenUpdate(gPlace.getPlace());
                    //$scope.$apply(function() {
                    //    place.$setViewValue($element.val());                
                    //});
                });

                $scope.locate = function () {
                    if (navigator.geolocation) {
                        $scope.geolocationLoading = true;
                        navigator.geolocation.getCurrentPosition(function (position) {
                            $rootScope.chosenPlace = null;

                            var geocoder = new google.maps.Geocoder;
                            var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
                            geocoder.geocode({'location': latlng}, function (results, status) {
                                if (status === 'OK') {
                                    updateCity(results[0]);
                                    //$scope.geolocationLoading = false;
                                    //$rootScope.chosenPlace = results[0];
                                    //if (localStorage.getItem('chosenPlace')) {
                                    //  localStorage.setItem('chosenPlace', JSON.stringify($rootScope.chosenPlace));
                                    //}
                                    //
                                    //$state.go($attrs.state, {
                                    //  latlng: position.coords.latitude +','+ position.coords.longitude,
                                    ///  address: $rootScope.chosenPlace.formatted_address
                                    //});

                                } else {
                                    alert('Sorry, there was an issue getting an address for your current location. Please try typing your address above.');
                                }
                            });

                        }); // getCurrentPosition

                    } else {
                        alert("Geolocation is not supported by this browser.");
                    }
                }

                $scope.chosenUpdate = function (chosenPlace) {
                    if (chosenPlace != null) {
                        $scope.chosenLoading = true;
                        $rootScope.chosenPlace = chosenPlace;
                        updateCity(chosenPlace);
                        //$scope.chosenPlace = chosenPlace;
                        //console.log(chosenPlace);
                        //$state.go($attrs.state, {
                        //  latlng: $rootScope.chosenPlace.geometry.location.lat() +','+ $rootScope.chosenPlace.geometry.location.lng(),
                        //  address: $attrs.requireAddress ? $rootScope.chosenPlace.formatted_address : null
                        //});
                    }
                }


                // Adds an address_assoc param to chosenPlace for easier address manipulation.
                var addAddressAssoc = function (data) {
                    data.address_assoc = {};
                    for (var i in data.address_components) {
                        data.address_assoc[data.address_components[i].types[0]] = data.address_components[i].short_name;
                    }
                    data.name = data.name != undefined ? data.name : data.formatted_address;
                    return data;
                }

                var updateCity = function (data) {
                    var data = addAddressAssoc(data);
                    var location = {
                        state: data.address_assoc.administrative_area_level_1,
                        city: data.address_assoc.locality
                    };
                    $scope.loadCity(location, function () {
                        $scope.chosenLoading = false;
                        $scope.geolocationLoading = false;
                    });
                }


            }
        };
    })
