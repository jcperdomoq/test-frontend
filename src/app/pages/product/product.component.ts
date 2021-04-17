import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/services.index';
import { ProductChooseComponent } from './product-choose/product-choose.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product:Product = new Product('1', '1', '1');

  @ViewChild("choose") choose:ProductChooseComponent;
  constructor(
    private apiService:ApiService,
    private rutaActiva: ActivatedRoute,
  ) {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.loadingProduct(params.id);
      }
    );
   }

  ngOnInit(): void {
    this.loadingProduct(1);
  }

  loadingProduct(id){
    this.apiService.get(id,'products')
      .subscribe((res:any)=>{
        if(res){
          this.product.productName = res.productName; 
          this.product.unitPrice = res.unitPrice;
          this.product.total = (this.choose.flagCoverage?this.choose.valueCoverage:0)+
          (this.choose.flagFeatures?this.choose.valueFeaturese:0)+res.unitPrice
        }
      })
  }

}
