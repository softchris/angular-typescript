module app.products {
    
    interface IProductsService{
        getProducts():ng.IPromise<Products>,
        getProduct(id:number):ng.IPromise<Product>
    }

    export class ProductsService implements IProductsService{
        http:ng.IHttpService;
        
        constructor($http:ng.IHttpService){
            this.http = $http;
        }
        
        getProducts(): ng.IPromise<any>{
            return this.http.get('products.json').then( res => {
                return new Products(res.data);
            })
        }
        
        getProduct(id:number):ng.IPromise<any> {
            return this.http.get('product.json').then( res => {
                return new Product(res.data);
            })
        }
    }

    angular
        .module('app')
        .service('productSrv', ProductsService);
}