angular.module('app.routes', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		//home page route
		.state('home', {
            url : '/home',
			templateUrl : 'views/pages/home.html',
			controller : 'mainController',
			controllerAs : 'main'
		})	
		.state('produtos', {
            url: '/produtos',
			templateUrl: 'views/pages/produtos.html',
			controller : 'produtosController',
			controllerAs : 'produtos'
		})
        .state('produtos-create', {
            url : '/produtos-create',
            templateUrl : 'views/pages/produtos-create-edit.html',
            controller : 'produtosCreateController',
            controllerAs : 'produtos'
        })
        .state('produtos-edit', {
            url : "/produtos/:produto_id",
            templateUrl : 'views/pages/produtos-create-edit.html',
            controller : 'produtosEditController',
            controllerAs : 'produtos'
        })
		.state('about', {
            url: '/about',
			templateUrl: 'views/pages/about.html',
		})

    $urlRouterProvider.otherwise('/home');
    
})