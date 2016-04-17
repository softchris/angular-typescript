module app.products {
    angular
        .module('app')
        .config( function($routeProvider : ng.route.IRouteProvider) {
            $routeProvider.when('/products', {
                templateUrl : 'features/products/products.html',
                controller: 'productsController'
            });
        } )
}