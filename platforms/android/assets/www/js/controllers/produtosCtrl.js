angular.module('produtosCtrl', ['produtosService'])

    .controller('produtosController', function( Produto) {

        var vm = this;
        vm.message = "Produtos";
        vm.processing = true;
    
        //chamar serviço para listar produtos 
        vm.getAll = function () {
            Produto.all ()
                .then( function (response) {
        	       console.log(response);
        	       vm.processing = false;
        	       vm.produtosList = response.data;
            
                })
                .catch(function (err){
        	       console.log(err);
                })
        }
        //deletar um produto pelo id
        vm.delete = function (id){
            vm.processing = true;
            Produto.remove(id)
                .then(function (response){
                    vm.getAll();           
                });
        }
        //chamar essa funcao assim que a pagina carregar
        vm.getAll();

    })

    .controller('produtosCreateController', function ( Produto){
        var vm = this;
        vm.type = 'create';
        vm.save = function (){
            //carregando request
            vm.processing = true;
            //criando var para feedback
            vm.message = '';  
            Produto.create(vm.produtoData)
                .then(function(response){
                    //nao esta mais carregando
                    vm.processing = false;
                    //limpando os inputs
                    vm.produtoData = {};
                    //feedback do servidor
                    vm.message = response.data.message;   
                    console.log('r: ' + response);
            });
        }  
    })
    
    .controller('produtosEditController', function ($stateParams, Produto) {
        var vm = this;
        vm.type = 'edit';
        vm.save = function () {
            vm.processing = true;
            vm.message = '';
            
            Produto.edit($stateParams.produto_id, vm.produtoData)
                .then(function (response){
                    vm.processing = false;
                    vm.produtoData = {};
                    vm.message = response.data.message;
                    console.log(response);
                    
                }); 
            console.log('params: ' + $stateParams.produto_id);
        }
    });