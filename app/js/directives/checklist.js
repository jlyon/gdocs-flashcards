angular.module('app')

    .directive('checklistAccordion', function ($rootScope, $state, $sce) {
        return {
            restrict: 'A',
            scope: {
                site: '=',
                checklist: '='
            },
            templateUrl: 'views/checklist.html',
            link: function ($scope, $element, $attrs, place) {

                $scope.doClick = function (item, $e) {
                    $e.preventDefault();
                    window.open(site.url + item.link);
                }

                $scope.accordionClick = function (item, $e) {
                    $e.preventDefault();
                    item.active = item.active != undefined && item.active ? false : true;
                }

                var markClicked = function (site, item) {
                    SiteChecklist.get({'siteId': $state.params.siteId}).$promise.then(function (data) {
                        $scope.checklist = data;
                    });
                }

                if ($scope.checklist) {
                    for (var i = 0; i < $scope.checklist.length; i++) {
                        //$scope.checklist[i].video = $scope.checklist[i].video ? $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.checklist[i].video) : null;
                    }
                }


            }
        };
    })
