'use strict';


angular.module('payments', [
    'proudcityService'
])

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {


                $stateProvider

                    .state("site.payments", {
                        url: '/payments',
                        templateUrl: 'views/payments/list.html',
                        auth: true,
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, site) {
                            $scope.site = site;

                            if (site.stripe == undefined || site.stripe.id == undefined) {
                                $state.go('site.payments.settings', {siteId: $state.params.siteId});
                            }

                        }
                    })

                    .state("site.paymentsSettings", {
                        url: '/payments-settings',
                        templateUrl: 'views/payments/settings.html',
                        auth: true,
                        resolve: {
                            stripeAccount: function ($stateParams, $rootScope, SiteStripeAccount, site) {
                                if (!site.tokens || !site.tokens.stripe || !site.tokens.stripe.id) {
                                    return false;
                                }
                                return SiteStripeAccount.get({siteId: $stateParams.siteId}).$promise.then(function (data) {
                                    return data;
                                })
                            }
                        },
                        controller: function ($scope, $rootScope, $state, $filter, $timeout, $window, site, stripeAccount, SiteStripeAccount) {

                            if (!stripeAccount) {
                                $scope.account = {
                                    country: 'US',
                                    business_url: site.url,
                                    external_account: {
                                        object: 'bank_account',
                                        country: 'US',
                                        currency: 'usd'
                                    }
                                }
                                $scope.isNew = true;
                            }
                            else {
                                stripeAccount.tos_acceptance = 1;
                                $scope.account = stripeAccount;
                                $scope.isNew = false;
                                console.log(stripeAccount);
                            }

                            $scope.submit = function () {
                                $scope.account.siteId = $state.params.siteId;
                                console.log($scope.account);
                                SiteStripeAccount.save($scope.account, function (result) {
                                        console.log(result);
                                        $scope.msg = 'success';
                                        $window.scrollTo(0, 0);
                                    },
                                    function (err) {
                                        // error callback
                                        $scope.msg = err.data.message;
                                        $window.scrollTo(0, 0);
                                    });
                            }

                        }
                    })


            }
        ]
    )