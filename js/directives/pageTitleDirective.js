(function() {

    'use strict';

    /*
      Directive to update html title

      The directive can be invoked by:
        - Element name (tag)
        - Attribute
        - Class
        - Comment
    */
    angular
        .module('pageTitleDir', [])
        .directive('pageTitle', pageTitleDir);

    pageTitleDir.$inject = ['$rootScope', '$timeout'];

    function pageTitleDir($rootScope, $timeout) {
        var titleDir = {
            link: link
        };

        return titleDir;

        function link(scope, element) {
            var listener = function(event, toState) {
                var title = 'PC y Laptop';

                /* Checking if the state has data and if the data contains the page title */
                if (toState.data && toState.data.pageTitle) {
                    /* If it does, assign that title to the title variable */
                    /* If not, leave default value */
                    title = toState.data.pageTitle;
                }

                /* Assign title to the element that has the directive */
                $timeout(function() {
                    element.text(title);
                }, 0, false);
            };

            $rootScope.$on('$stateChangeSuccess', listener);
        }
    }

})();
