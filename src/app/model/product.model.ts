export interface product{
    id:number;
    description:string;
    price:number;
    promotion:boolean;
    available:boolean;
    selected:boolean;
    photo:string;
    quantity:number;
    _links:{
        self:{href:string},
        product:{href:string},
        category:{href:string}
    }
}