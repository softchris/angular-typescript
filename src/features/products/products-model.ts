module app.products {
    
    interface IProducts {
        getProducts(): Product[];
    };

    export class Products implements IProducts{
        dto:any;
        products:Product[];
        
        constructor(dto:any) {
            this.dto = dto;
            this.products = [];
            
            dto.forEach( x => {
                this.products.push( x );
            });
        }
        
        getProducts():Product[] {
            return this.products;
        }
    }
}
