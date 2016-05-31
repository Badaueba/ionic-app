angular.module('produtosService', [])
.factory ('Produto', function ($http) {
	var produtoFactory = {};

	produtoFactory.all = function () {
		return $http.get('https://zmarket.herokuapp.com/api/produtos');
	}
    produtoFactory.create = function (data) {
        return $http.post('https://zmarket.herokuapp.com/api/produtos', data);
    }
    produtoFactory.remove = function (id){
        return $http.delete('https://zmarket.herokuapp.com/api/produtos/' + id);
    }
    produtoFactory.edit = function(id, data){
        return $http.put('https://zmarket.herokuapp.com/api/produtos/'+id, data);
    }
	return produtoFactory;

})