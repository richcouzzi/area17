function accordion() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            sections: '='
        },
        link: (scope, elem, attrs) => {

            scope.activeIndex = 0;

            scope.setActiveIndex = (index) => {
                scope.activeIndex = index;
            };
        },
        templateUrl: 'templates/components/accordion.html'
    }
}

export {accordion};
