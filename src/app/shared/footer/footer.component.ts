import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

// Utils
import { getTotalPrice } from 'src/app/utils/totalPrice.helper';

// Servicios
import { UiService } from 'src/app/services/services.index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('btnBuy', { read: ElementRef }) btnBuy: ElementRef;

  @Input()product: Product = null;

  constructor(
    private _uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  // Comprar producto
  buyProduct(): void {
    this._uiService.showLoading();
    setTimeout(() => {
      this._uiService.closeLoading();
      this._uiService.showAlertHTML(
        'Compra realizada',
        'success',
        `<b class="text-uppercase">${this.product.productName}</b><br><br>Haz realizado una compra del producto por un costo de: <b>$${this.product.total}</b>`
      );
    }, 1500);
  }
}
