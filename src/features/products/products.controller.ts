/// <reference path="../../../typings/angularjs/angular.d.ts" />

module app.products {
    
    interface IProductsController{
        getTitle():string;
    }

    class ProductsController implements IProductsController{
        title:string;
        service :ProductsService;
        product : Product;
        
        constructor(productSrv:products.ProductsService){
            this.title = 'products list';
            this.service = productSrv;
            
            this.service.getProduct(1).then(res => {
                this.product = res; 
            });
        }
        
        getTitle(){
            return this.title;
        }
    }

    angular
        .module('app')
        .controller('productsCtrl',ProductsController);
        
}