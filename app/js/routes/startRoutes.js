'use strict';


angular.module('start', [
    'proudcityService',
    'fullPage.js'
])

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {


                $stateProvider

                    .state("start", {
                        url: '/start',
                        templateUrl: 'views/start/start.html',
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, $sce, City, DistroChecklist) {
                            $scope.location = null;
                            $scope.showModal = false;

                            $scope.fullScreenOptions = {
                                sectionsColor: ['#323A45', '#fff', '#D6D7D9'],
                                navigation: true,
                                navigationPosition: 'right',
                                scrollingSpeed: 1000
                            }

                            $scope.scrollToSection = function (num) {
                                $.fn.fullpage.moveTo(num);
                            }

                            $scope.nextSection = function ($event) {
                                $event.preventDefault();
                                $.fn.fullpage.moveSectionDown();
                            }


                            // City is chosen, move on to step 2
                            // Called from the pc-locate directive
                            $scope.loadCity = function (location, cb) {
                                $scope.loaded = false;

                                City.get(location).$promise.then(function (data) {
                                    $scope.location = location;
                                    $scope.place = location.city + ', ' + location.state;
                                    $scope.embedUrl = $sce.trustAsResourceUrl($rootScope.cityApiUrl + '/../city/' + location.state + '/' + location.city + '/local/embed');
                                    $scope.stats = data.stats;
                                    $scope.image = data.image;
                                    $scope.staticmap = data.staticmapLg;
                                    $scope.thumbnail = data.thumbnail;
                                    $scope.subdomain = (location.city + ' ' + location.state).replace(/ /g, '-').toLowerCase();

                                    $timeout(function () {
                                        if (!$scope.loaded) {
                                            DistroChecklist.get({distro: 'service-center'}).$promise.then(function (data) {
                                                $scope.checklist_service_center = data;
                                            });

                                            DistroChecklist.get({distro: 'proudcity-upgrade'}).$promise.then(function (data) {
                                                $scope.checklist_proudcity = data;
                                            });
                                            $scope.scrollToSection(2);
                                            if (cb) {
                                                cb();
                                            }
                                            $scope.loaded = false;
                                        }
                                    });

                                    //$scope.$apply();
                                });

                                $scope.checklist_proudcity_maintain = [
                                    {
                                        "key": "editor",
                                        "title": "Learn about the Analytics Dashboard",
                                        "icon": "fa-line-chart",
                                        "link": null,
                                        "time": "",
                                        "description": ""
                                    },
                                    {
                                        "key": "editor",
                                        "title": "ProudCity's Bi-Weekly Release Cycles",
                                        "icon": "fa-clock-o",
                                        "link": null,
                                        "time": "",
                                        "description": ""
                                    },
                                    {
                                        "key": "editor",
                                        "title": "Complete ProudCity SLA",
                                        "icon": "fa-file-text-o",
                                        "link": null,
                                        "time": "",
                                        "description": ""
                                    },
                                ]


                                $scope.doContact = function () {
                                    $scope.scrollToSection(7);
                                }

                                $scope.doEmbed = function () {
                                    $state.go('siteCreateLocalEmbed', $scope.location);
                                }

                                $scope.doCreateServiceCenter = function () {
                                    $state.go('siteCreateCity', {
                                        distro: 'service-center',
                                        city: $scope.location.city,
                                        state: $scope.location.state
                                    });
                                }

                                $scope.doCreateProudCity = function () {
                                    $state.go('siteCreateCity', {
                                        distro: 'proudcity',
                                        city: $scope.location.city,
                                        state: $scope.location.state
                                    });
                                }


                            }

                        }
                    })


            }
        ]
    )