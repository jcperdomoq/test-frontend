export class Product {
    public unitPrice: number;
    public color: string;
    public coverage: string;
    public feature: string;
    public productName:string;
    public total:number;

    constructor(color: string, coverage: string, feature: string) {
        this.unitPrice = 295.95;
        this.total  = 295.95;
        this.color = color;
        this.coverage = coverage;
        this.feature = feature;
        this.productName = "MOMENTUM Tue Wireless 2"
    }
}