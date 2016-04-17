module app.products {
    export class Product{
        id:number;
        name:string;
        
        constructor(dto){
            this.id = dto.id;
            this.name = dto.name
        }
    }
}
