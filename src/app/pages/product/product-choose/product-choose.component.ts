import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-choose',
  templateUrl: './product-choose.component.html',
  styleUrls: ['./product-choose.component.scss']
})
export class ProductChooseComponent implements OnInit {

  @Input() product:Product;
  flagColor: boolean = true;
  flagCoverage: boolean = true;
  flagFeatures: boolean = true;

  valueCoverage = 75;
  valueFeaturese = 25;
  constructor(

  ) { }

  ngOnInit(): void {
  }

  // Cambiar el color del producto
  chooseColor(flag: boolean) {
    this.flagColor = flag;
    let color = (this.flagColor) ? '1' : '2';
  }

  // Cambiar coverage del producto
  chooseCoverage(flag: boolean) {
    this.flagCoverage = flag;
    this.product.total = flag?this.product.total+this.valueCoverage:this.product.total-this.valueCoverage;
  }

  // Cambiar choose del producto
  chooseFeatures(flag: boolean) {
    this.flagFeatures = flag;
    this.product.total = flag?this.product.total+this.valueFeaturese:this.product.total-this.valueFeaturese;
  }
}
