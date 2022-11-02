export interface POModel {
    id?:string|number;
    date:string;
    supplierid:string|number;
    itemDetails:itemDetails[]
}

export interface itemDetails{
    id:string|number;
    poid?:string|number;
    itemId:string|number;
    quantity:string|number;
    unitprice:string|number;
    total:string|number;
}
