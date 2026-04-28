import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailPage {
  private route = inject(ActivatedRoute);
  quantity = 1;
  selectedColor = '';

  product: Product = PRODUCTS[0];

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = PRODUCTS.find(item => item.id === id) ?? PRODUCTS[0];
      this.selectedColor = this.product.colors[0];
    });
  }

  get related(): Product[] {
    return PRODUCTS
      .filter(item => item.id !== this.product.id && item.category === this.product.category)
      .slice(0, 2);
  }

  increment(): void {
    if (this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
