'use strict';

//***************************************

// Main Application

// To get direct links to audio files in Google Drive: http://directlink.booogle.net/

//***************************************

angular.module('app', [
    'ui.router',
    'ngAnimate'
])

    .run(
        ['$sce', '$timeout', '$rootScope', '$state', '$stateParams',
            function ($sce, $timeout, $rootScope, $state, $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;



            }
        ]
    )

    .config(
        ['$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($locationProvider, $stateProvider, $urlRouterProvider) {



                /////////////////////////////
                // Redirects and Otherwise //
                /////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider
                    .when('', '/');

                //.otherwise(token ? '/sites' : '/start');

                //////////////////////////
                // State Configurations //
                //////////////////////////
                $stateProvider
                    .state("home", {
                        url: '/flashcards?doc&sheet',
                        templateUrl: 'views/home.html',
                        // auth: true,
                        /*resolve: {
                            cards: function ($stateParams, $rootScope, $http) {

                            }
                        },*/
                        controller: function ($scope, $rootScope, $state, $filter, $http) {
                            //var url  = 'https://docs.google.com/spreadsheets/d/1pyCptrdv3-laxJPSbXda_bfC5HiyOlpeuP_LVgBVuxA/pubhtml';
                            //url = $state.params.doc;
                            //var matched = url.match(/https:\/\/docs.google.com\/spreadsheets\/d\/(.+)\/pubhtml/);
                            //var id = matched[1];
                            var sheet = $state.params.sheet ? $state.params.sheet : 1; // @todo
                            var doc = $state.params.doc;
                            var feed = 'https://spreadsheets.google.com/feeds/list/'+ doc +'/'+ sheet +'/public/values?alt=json';
                            var oAudio = document.getElementById('myaudio');

                            var colors = {
                                red: '#f79b9b',
                                orange: '#f9d78b',
                                yellow: '#f9f78b',
                                green: '#cff9d0',
                                blue: '#cfe6f9',
                                purple: '#b687d3'
                            }

                            $http({
                                method: 'GET',
                                url: feed
                            }).then(function successCallback(response) {
                                console.log(response);
                                var data = response.data.feed.entry;
                                console.log(data);
                                var out = [];
                                for (var i=0; i<data.length; i++) {
                                    out.push({
                                        word: data[i]['gsx$word']['$t'],
                                        color: colors[data[i]['gsx$color']['$t']] ? colors[data[i]['gsx$color']['$t']] : 'white',
                                        recording: data[i]['gsx$recording']['$t']
                                    });
                                }
                                out = shuffle(out);
                                $scope.data = out;
                                $scope.total = out.length;
                                $scope.i = 0;
                                go(0);

                            }, function errorCallback(response) {
                                // called asynchronously if an error occurs
                                // or server returns response with an error status.
                            });

                            var go = $scope.go = function(delta) {
                                $scope.i += delta;
                                $scope.item = $scope.data[$scope.i];
                                $scope.stage = 'read';
                                oAudio.pause();
                                oAudio.src = $scope.item.recording;
                            }

                            var play = $scope.play = function() {
                                $scope.stage = 'play';
                                oAudio.play();
                            }

                            function shuffle(array) {
                                var currentIndex = array.length, temporaryValue, randomIndex;

                                // While there remain elements to shuffle...
                                while (0 !== currentIndex) {

                                    // Pick a remaining element...
                                    randomIndex = Math.floor(Math.random() * currentIndex);
                                    currentIndex -= 1;

                                    // And swap it with the current element.
                                    temporaryValue = array[currentIndex];
                                    array[currentIndex] = array[randomIndex];
                                    array[randomIndex] = temporaryValue;
                                }

                                return array;
                            }


                            //$scope.sites = cards;

                        }
                    })

            }
        ]
    );


//***************************************

// How to use workflow

//***************************************

// angular.module('healthLiteracy.use', [
//   'ui.router',
// ])

// .config(
//   [          '$stateProvider', '$urlRouterProvider',
//     function ($stateProvider,   $urlRouterProvider) {

//      /////////////////////////////
//       // Redirects and Otherwise //
//       /////////////////////////////

//       // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
//       $urlRouterProvider
//        .when('/use', '/contacts/:id');

//       //////////////////////////
//       // State Configurations //
//       //////////////////////////

//       // Use $stateProvider to configure your states.
//       $stateProvider

//         //////////
//         // Home //
//         //////////

//         .state("home", {

//           // Use a url of "/" to set a state as the "index".
//           url: "/",

//           // Example of an inline template string. By default, templates
//           // will populate the ui-view within the parent state's template.
//           // For top level states, like this one, the parent template is
//           // the index.html file. So this template will be inserted into the
//           // ui-view within index.html.
//           templateUrl: 'views/home.html'
//         });

//     }
//   ]
// );

