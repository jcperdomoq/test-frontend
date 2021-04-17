import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit, AfterViewInit {

  @ViewChildren('mySlides') mySlides: QueryList<ElementRef>;
  @ViewChildren('myDots') myDots: QueryList<ElementRef>;

  images: any = [
    { url: 'assets/images/producto/item1.png' },
    { url: 'assets/images/producto/item2.png' },
    { url: 'assets/images/producto/item3.png' }
  ]

  slideIndex = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }
  
  // Control del slide
  currentSlide(index: number): void {
    this.showSlides(this.slideIndex = index);
  }
  
  // Mostrar el slide seleccionado
  showSlides(index: number): void {
    let slides = this.mySlides.map((child: ElementRef) => {
      return child.nativeElement;
    });
    let dots = this.myDots.map((child: ElementRef) => {
      return child.nativeElement;
    });
    if (index > slides.length) {this.slideIndex = 1;}
    if (index < 1) {this.slideIndex = slides.length;}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }
}
