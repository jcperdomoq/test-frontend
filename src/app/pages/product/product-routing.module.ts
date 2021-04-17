import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: 'producto/:id',
    component: ProductComponent,
    data: {
      title: 'Producto'
    }
  },
  { path: '', redirectTo: 'producto/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
