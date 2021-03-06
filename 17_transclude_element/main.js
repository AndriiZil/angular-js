const app = angular.module('app', []);

app.directive('wrapIn', function ($templateCache) {

    return {
        transclude: 'element',
        link: function (scope, element, attrs, ctrl, transclude) {
            let template = $templateCache.get(attrs.wrapIn);
            let templateElement = angular.element(template);
            console.log('wrapIn', templateElement);

            transclude(scope, function (clone) {
                element.after(templateElement.append(clone));
            })
        }
    }
});