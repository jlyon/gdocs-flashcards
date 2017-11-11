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
                    .state("flashcards", {
                        url: '/flashcards?doc&sheet',
                        templateUrl: 'views/flashcards.html',
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
                                red: '#ef2b2b',
                                orange: '#f79013',
                                yellow: '#fffa00',
                                'light green': '#cff9d0',
                                'dark green': '#558c3d',
                                blue: '#cfe6f9',
                                purple: '#b687d3'
                            };



                            $http({
                                method: 'GET',
                                url: feed
                            }).then(function successCallback(response) {
                                var data = response.data.feed.entry;
                                var out = [];
                                for (var i=0; i<data.length; i++) {
                                    out.push({
                                        question: data[i]['gsx$question']['$t'],
                                        color: colors[data[i]['gsx$color']['$t']] ? colors[data[i]['gsx$color']['$t']] : 'white',
                                        recording: data[i]['gsx$recording'] ? data[i]['gsx$recording']['$t'] : null,
                                        answer: data[i]['gsx$answer'] ? data[i]['gsx$answer']['$t'] : null,
                                        pronunciation: data[i]['gsx$pronunciation'] ? data[i]['gsx$pronunciation']['$t'] : null
                                    });
                                }
                                out = shuffle(out);
                                resetList(out);

                            }, function errorCallback(response) {
                                // called asynchronously if an error occurs
                                // or server returns response with an error status.
                            });

                            var resetList = function(data) {
                                $scope.data = data;
                                $scope.total = data.length;
                                $scope.i = 0;
                                go(0);
                            }

                            var go = $scope.go = function(delta) {
                                $scope.i += delta;
                                if ($scope.i < 0) {
                                    $scope.i = 0;
                                }
                                if ($scope.i >= $scope.total) {
                                    $scope.stage = 'done';
                                }
                                else {
                                    $scope.item = $scope.data[$scope.i];
                                    $scope.stage = 'question';
                                    oAudio.pause();
                                    oAudio.src = $scope.item.recording;
                                }
                            }

                            var play = $scope.play = function() {
                                $scope.stage = 'answer';
                                oAudio.play();
                            }


                            $scope.answers = {
                                correct: 0,
                                incorrect: 0
                            }
                            var answer = $scope.answer = function(status) {
                                $scope.item.status = status;
                                $scope.answers[status] ++;
                                go(1);
                            }

                            $scope.filteredList = function(status) {
                                if ($scope.answers[status] > 0) {
                                    var data = $scope.data.filter(function (record) {
                                        return (record.status == 'incorrect');
                                    });
                                    resetList(data);
                                }

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
                    .state("done", {
                        url: '/congratulations?doc&sheet&color',
                        templateUrl: 'views/done.html',
                        // auth: true,
                        /*resolve: {
                         cards: function ($stateParams, $rootScope, $http) {

                         }
                         },*/
                        controller: function ($scope, $rootScope, $state, $filter, $http) {
                            $scope.color = $state.params.color;

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

