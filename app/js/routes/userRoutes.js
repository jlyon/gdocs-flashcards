'use strict';


angular.module('user', [
    'auth0.lock',
    'proudcityService'
])

    .config(
        ['$stateProvider', '$urlRouterProvider', 'lockProvider',
            function ($stateProvider, $urlRouterProvider, lockProvider) {
                // Redirect if on city hompage
                // $urlRouterProvider.when(/\//i, ['$match', '$stateParams', function ($match, $stateParams) {
                //   return '/answers';
                // }]);

                // Init Auth0
                var showLogin = false;
                if (_.get(Proud, 'settings.global.auth0')) {
                    showLogin = true;

                    lockProvider.init({
                        domain: _.get(Proud, 'settings.global.auth0.domain') || '',
                        clientID: _.get(Proud, 'settings.global.auth0.clientID') || '',
                        options: {
                            icon: 'https://s.gravatar.com/avatar/e03d599ad377f00d233bf9d00f538878?s=80',
                            container: 'widget-container',
                            focusInput: false,
                            //popup: true,
                            //responseType: 'token',
                            //redirectUrl: window.location.protocol + '//' + window.location.hostname + '/login',
                            theme: {
                                logo: false,
                                primaryColor: '#0071BC'
                            },
                            auth: {
                                //params: {param1: "value1"},
                                //redirect: true,
                                redirectUrl: 'https://new.proudcity.com/login',//window.location.protocol + '//' + window.location.hostname + '/login',
                                responseType: "token"
                                //sso: true
                            }
                        }
                    });
                }


                $stateProvider

                    .state("login", {
                        url: '/login?destination&params',
                        templateUrl: 'views/user/login.html',
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, lock) {

                            lock.on('authenticated', function (authResult) {
                                console.log('authresult', authResult);
                                localStorage.setItem('id_token', authResult.idToken);
                                $rootScope.token = authResult.idToken;
                                var params = JSON.parse(localStorage.getItem('login_redirect'));
                                localStorage.setItem('login_redirect', null);
                                console.log('PARAMS=', params);
                                if (params && params.destination) {
                                    console.log('redir');
                                    $state.go(params.destination, params.params ? params.params : null);
                                }
                                else {
                                    console.log('no redir');
                                    $state.go('sites');
                                }
                            });
                            lock.interceptHash();

                            $timeout(function () {
                                // Show Auth0
                                if ($rootScope.token == undefined || !$rootScope.token) {
                                    if ($state.params.destination) {
                                        localStorage.setItem('login_redirect', JSON.stringify({
                                            destination: $state.params.destination,
                                            params: JSON.parse($state.params.params)
                                        }));
                                    }
                                    lock.show();
                                }
                                else {
                                    console.log('sites1');
                                    $state.go('sites');
                                }
                            });

                        }
                    })

                    .state("logout", {
                        url: '/logout',
                        //templateUrl: 'views/user/login.html',
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, lock) {

                            localStorage.setItem('id_token', '');
                            $rootScope.token = null;
                            window.location = 'https://proudcity.auth0.com/v2/logout?returnTo=https%3A%2F%2Fproudcity.com';

                        }
                    })


            }
        ]
    )