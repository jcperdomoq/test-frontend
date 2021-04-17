import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

// Componentes
import { ProductComponent } from './product.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUsesComponent } from './product-uses/product-uses.component';
import { ProductChooseComponent } from './product-choose/product-choose.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductImageComponent,
    ProductDetailComponent,
    ProductUsesComponent,
    ProductChooseComponent,
    ProductSpecificationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
