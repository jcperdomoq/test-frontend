import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-uses',
  templateUrl: './product-uses.component.html',
  styleUrls: ['./product-uses.component.scss']
})
export class ProductUsesComponent implements OnInit {

  // IMAGES
  images = [
    { url: 'assets/images/producto/opts/opt1.png', text: 'Customizable Touch Controls' },
    { url: 'assets/images/producto/opts/opt2.png', text: 'Built-in Equializer' },
    { url: 'assets/images/producto/opts/opt3.png', text: 'Active Noise Cancellation' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
