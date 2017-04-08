'use strict';


angular.module('site', [
    'proudcityService',
    'ng.jsoneditor'
])

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {


                $stateProvider

                    .state("sites", {
                        url: '/sites',
                        templateUrl: 'views/site/sites.html',
                        auth: true,
                        resolve: {
                            sites: function ($stateParams, $rootScope, Site) {
                                return Site.query().$promise.then(function (data) {
                                    for (var i in data) {
                                        if (data[i].app) {
                                            data[i].thumb = 'https://storage.googleapis.com/city-api/proudcitythumbs/' + data[i].app + '.png'//data[i].thumb ? data[i].thumb : 'https://'(data[i].city +' '+ data[i].state).
                                        }
                                    }
                                    console.log(data);

                                    return data;
                                })
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, sites) {

                            $scope.sites = sites;

                        }
                    })


                    .state("siteCreate", {
                        url: '/sites/create?type',
                        templateUrl: 'views/site/site-create.html',
                        auth: true,
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, Site) {
                            var site = $state.params;
                            var params = $state.params;

                            if (!site.type) {
                                $state.go('distros');
                            }
                            $scope.isAgency = site.type == 'agency';

                            site.build = site.build != undefined && site.build == 0 ? false : 'true';
                            $scope.site = site;

                            $scope.updateApp = function () {
                                //$scope.watch()
                                $scope.site.name = params.name ? params.name : $scope.site.name ? $scope.site.name : $scope.site.city ? $scope.site.city : '';
                                $scope.site.subdomain = params.subdomain ? params.subdomain : ($scope.site.city != undefined ? $scope.site.city : '' + ' ' + $scope.site.state != undefined ? $scope.site.state : '').toLowerCase().replace(/ /g, '-');
                                $scope.site.url = params.url ? params.url : 'https://' + $scope.site.subdomain + '.proudcity.com';
                            }

                            $scope.submit = function () {
                                $scope.updateApp();
                                $scope.site.app = params.app ? params.app : $scope.site.subdomain.replace(/\-/g, '');
                                Site.save($scope.site, function (site) {
                                    $state.go('siteLoading', {siteId: site._id});
                                });
                            }

                            console.log($state.params);

                        }
                    })


                    .state("siteCreateAdmin", {
                        url: '/sites/create/admin?type&db&namespace&subdomain&app&url&build&city&state',
                        templateUrl: 'views/site/site-create-admin.html',
                        auth: true,
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, Site) {
                            var site = $state.params;
                            var params = $state.params;

                            //if (!site.type) {
                            //  $state.go('distros');
                            //}
                            $scope.isAgency = site.type == 'agency';
                            site.build = site.build != undefined && site.build == 0 ? false : true;
                            site.type = site.type ? site.type : 'proudcity';
                            site.namespace = site.namespace ? site.namespace : 'test';
                            $scope.site = site;


                            $scope.submit = function () {
                                site = $scope.site;
                                site.app = params.app ? params.app : $scope.site.subdomain.replace(/\-/g, '');
                                site.build = site.build == true ? 'true' : false;

                                Site.save($scope.site, function (site) {
                                    if (site.status == 'queued') {
                                        $state.go('siteLoading', {siteId: site._id});
                                    }
                                    else {
                                        $state.go('site.dashboard', {siteId: site._id});
                                    }
                                });
                            }

                            $scope.updateName = function ($event) {
                                $scope.site.name = $scope.site.city;
                                $event.preventDefault();
                            }
                            $scope.updateApp = function ($event) {
                                $scope.site.app = ($scope.site.city + ' ' + $scope.site.state).replace(/ /g, '').toLowerCase();
                                $event.preventDefault();
                            }
                            $scope.updateSubdomain = function ($event) {
                                $scope.site.subdomain = ($scope.site.city + ' ' + $scope.site.state).replace(/ /g, '-').toLowerCase();
                                $event.preventDefault();
                            }
                            $scope.updateUrl = function ($event) {
                                $scope.site.url = 'https://' + $scope.site.subdomain + '.proudcity.com';
                                $event.preventDefault();
                            }


                        }
                    })


                    .state("distros", {
                        url: '/distros',
                        templateUrl: 'views/site/site-distros.html',
                        auth: true,
                        resolve: {
                            distros: function ($stateParams, $rootScope, Distro) {
                                return Distro.query().$promise.then(function (data) {
                                    return data;
                                })
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, distros) {
                            $scope.distros = distros;

                        }
                    })


                    .state("siteCreateCity", {
                        url: '/sites/create/city?city&state&distro',
                        templateUrl: 'views/site/site-create-city.html',
                        auth: true,
                        resolve: {
                            city: function ($stateParams, $rootScope, City) {
                                return City.get({
                                    city: $stateParams.city,
                                    state: $stateParams.state
                                }).$promise.then(function (data) {
                                    return data;
                                })
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, Site, city) {
                            $scope.suffix = '.proudcity.com';

                            console.log('CITy', city);
                            $scope.bg = city.staticmapLg;


                            $scope.site = {
                                type: $state.params.distro ? $state.params.distro : 'proudcity',
                                build: 'true',
                                name: $state.params.city,
                                city: $state.params.city,
                                state: $state.params.state
                            }

                            var subdomainOrig = ($state.params.city + ' ' + $state.params.state).toLowerCase().replace(/ /g, '-');
                            $scope.getUrl = function () {
                                var prefixes = sitePrefixes();
                                $scope.site.subdomain = prefixes[Math.floor(Math.random() * prefixes.length)] + '-' + subdomainOrig;
                                $scope.site.url = 'https://' + $scope.site.subdomain + $scope.suffix;
                                $scope.site.app = $scope.site.subdomain.replace(/\-/g, '');
                            }

                            $scope.getUrl();

                            $scope.infoActive = false;


                            $scope.doLaunch = function (site) {
                                Site.save(site, function (site) {
                                    $state.go('siteLoading', {siteId: site._id});
                                });
                            }

                        }
                    })

                    .state("siteCreateLocalEmbed", {
                        url: '/city/:state/:city/embed',
                        templateUrl: 'views/site/local-embed.html',
                        auth: true,
                        resolve: {
                            city: function ($stateParams, $rootScope, City) {
                                return City.get({
                                    city: $stateParams.city,
                                    state: $stateParams.state
                                }).$promise.then(function (data) {
                                    return data;
                                })
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, CityEmbedCreate, city) {
                            $scope.cityApiUrl = $rootScope.cityApiUrl;
                            $scope.city = $state.params.city;
                            $scope.bg = city.staticmapLg;

                            var newSite = new CityEmbedCreate({
                                name: $state.params.city,
                                city: $state.params.city,
                                state: $state.params.state,
                            });
                            newSite.$save(function (data) {
                                data.city = $state.params.city;
                                data.state = $state.params.state;
                                $scope.site = data;
                            });


                        }
                    })


                    .state("site", {
                        url: '/sites/:siteId',
                        templateUrl: 'views/site/site.html',
                        auth: true,
                        resolve: {
                            site: function ($stateParams, $rootScope, Site) {
                                if (!$rootScope.token) {
                                    return alert('Not logged in');
                                }
                                return Site.get({'siteId': $stateParams.siteId}).$promise.then(function (data) {
                                    return data;
                                });
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site) {
                            $scope.site = site;
                        }
                    })

                    .state("siteLoading", {
                        url: '/sites/:siteId/loading',
                        templateUrl: 'views/site/loading.html',
                        auth: true,
                        resolve: {
                            site: function ($stateParams, $rootScope, Site) {
                                return Site.get({'siteId': $stateParams.siteId}).$promise.then(function (data) {
                                    return data;
                                });
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $interval, site, SiteBuild) {

                            if (site.status == 'live') {
                                $state.go('site.dashbard', {siteId: site._id});
                            }

                            var stages = {
                                'queued': {label: 'Waiting for liftoff...', progress: 5},
                                'building': {label: 'Firing the engines...', progress: 15},
                                'waiting': {label: 'Approaching outer space...', progress: 65},
                                'live': {label: 'Mission complete. The journey begins...', progress: 100},
                            }
                            $scope.site = site;
                            $scope.stage = stages[site.status];

                            var stop = $interval(function () {
                                SiteBuild.get({'siteId': $state.params.siteId}, function (data) {
                                    if (data.status != $scope.site.status) {
                                        $scope.site = data;
                                        $scope.stage = stages[data.status];
                                        $scope.status = data.status;
                                        if (data.status == 'live') {
                                            //$state.go('site.dashboard', {siteId: site._id});
                                            $interval.cancel(stop);
                                        }
                                    }
                                    else {
                                        $scope.stage.progress += 1;
                                    }
                                });
                            }, 5000);

                        }
                    })

                    .state("site.dashboard", {
                        url: '/dashboard',
                        templateUrl: 'views/site/dashboard.html',
                        auth: true,
                        /*resolve: {
                         checklist: function($stateParams, $rootScope, Checklist) {
                         if (!$rootScope.token) {
                         return alert('Not logged in');
                         }
                         return Checklist.get({'siteId': $stateParams.siteId}).$promise.then(function(data) {
                         return data;
                         });
                         }
                         },*/
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site, SiteChecklist) {

                            // @todo: this should be able to be in a resolve
                            $scope.site = site;
                            SiteChecklist.get({'siteId': $state.params.siteId}).$promise.then(function (data) {
                                $scope.checklist = data;
                            });

                        }
                    })


                    .state("site.plugins", {
                        url: '/integrations',
                        templateUrl: 'views/site/plugins.html',
                        auth: true,
                        resolve: {
                            plugins: function ($stateParams, $rootScope, SitePlugins) {
                                return SitePlugins.query({'siteId': $stateParams.siteId}).$promise.then(function (data) {
                                    return data;
                                });
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, plugins, site) {
                            $scope.plugins = plugins;
                            $scope.site = site;
                        }
                    })


                    .state("site.users", {
                        url: '/users',
                        templateUrl: 'views/site/users.html',
                        auth: true,
                        /*resolve: {
                         checklist: function($stateParams, $rootScope, Checklist) {
                         if (!$rootScope.token) {
                         return alert('Not logged in');
                         }
                         return Checklist.get({'siteId': $stateParams.siteId}).$promise.then(function(data) {
                         return data;
                         });
                         }
                         },*/
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site, SiteUsers) {

                            // @todo: this should be able to be in a resolve
                            SiteUsers.query({'siteId': $state.params.siteId}).$promise.then(function (data) {
                                $scope.users = data;
                                console.log(data);
                            });

                            $scope.activeUser = false;
                            $scope.roles = siteRoles();

                            $scope.setActive = function (user) {
                                $scope.activeUser = user ? user._id : false;
                            }

                            $scope.userRemove = function (user) {
                                if (confirm('Are you sure you want to remove the ' + user.role + ' ' + user.email + ' from' + site.name + '?')) {
                                    site.$remove();
                                }
                            }

                            $scope.userRoleUpdate = function (user) {
                                console.log(user);
                            }


                        }
                    })

                    .state("site.userAdd", {
                        url: '/users/add',
                        templateUrl: 'views/site/user-add.html',
                        auth: true,
                        /*resolve: {
                         checklist: function($stateParams, $rootScope, Checklist) {
                         if (!$rootScope.token) {
                         return alert('Not logged in');
                         }
                         return Checklist.get({'siteId': $stateParams.siteId}).$promise.then(function(data) {
                         return data;
                         });
                         }
                         },*/
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site, SiteUsers) {
                            $scope.site = site;
                            $scope.form = {};

                            $scope.roles = siteRoles();


                            // @todo: this should be able to be in a resolve
                            /*SiteUserInvite.query({'siteId': $state.params.siteId}).$promise.then(function(data) {
                             $scope.users = data;
                             console.log(data);
                             });*/

                            $scope.submit = function (data) {
                                console.log('SUBMIT', data);
                                var users = new SiteUsers();
                                data.siteId = site._id;
                                SiteUsers.save(data, function (err, res) {
                                    console.log(err, resp);
                                });
                            }

                        }
                    })


                    .state("site.adminEdit", {
                        url: '/edit/admin?msg',
                        templateUrl: 'views/site/site-edit-admin.html',
                        auth: true,
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site, Site) {

                            $scope.obj = {data: site.toJSON(), options: {mode: 'tree'}};
                            $scope.msg = $state.params.msg;
                            console.log($state.params);


                            $scope.toggle = function () {
                                $scope.obj.options.mode = $scope.obj.options.mode == 'code' ? 'tree' : 'code';
                            }

                            $scope.submit = function (data) {
                                var site = new Site(data);
                                site.siteId = site._id;
                                Site.save(site, function (site) {
                                    $state.go('site.adminEdit', {siteId: site._id, msg: 'saved'});
                                });
                            }

                        }
                    })


            }
        ]
    )


var siteRoles = function () {
    return [
        {
            value: '',
            label: 'Select one'
        },
        {
            value: 'editor',
            label: 'Admin'
        },
        {
            value: 'publisher',
            label: 'Publisher'
        },
        {
            value: 'author',
            label: 'Author'
        }
    ];
}

var sitePrefixes = function () {
    return [
        'thriving',
        'active',
        'dynamic',
        'lively',
        'energetic',
        'agile',
        'relaxing',
        'confortable',
        'safe',
        'easy',
        'competitive',
        'bustling',
        'rustic',
        'picturesque',
        'romantic',
        'quaint',
        'diverse'
    ];
}