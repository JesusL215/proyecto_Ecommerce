import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, Product } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-ofertas-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './ofertas-page.component.html',
  styleUrls: ['./ofertas-page.component.scss']
})
export class OfertasPageComponent {
  ofertasArray: Product[] = [
    { id: 201, name: 'MacBook Air 13 Chip M3', image: 'assets/hero-image-1.png', salePrice: 1200, originalPrice: 1500, savings: 300, stock: 15, discountPercentage: 20 },
    { id: 202, name: 'Apple iPhone 14', image: 'assets/hero-image-2.png', salePrice: 800, originalPrice: 1000, savings: 200, stock: 23, discountPercentage: 20 },
    { id: 203, name: 'Smart Watch series 7', image: 'assets/prod-smartwatch.png', salePrice: 350, originalPrice: 500, savings: 150, stock: 30, discountPercentage: 30 },
    { id: 204, name: 'VRB01 Virtual Reality Glasses', image: 'assets/prod-vr.png', salePrice: 300, originalPrice: 400, savings: 100, stock: 12, discountPercentage: 25 },
    { id: 205, name: 'Xiaomi Wireless Buds Pro', image: 'assets/prod-xiaomi-buds.png', salePrice: 70, originalPrice: 100, savings: 30, stock: 45, discountPercentage: 30 },
    { id: 206, name: 'Laptop Gamer Acer Predator H18', image: 'assets/prod-acer.png', salePrice: 1200, originalPrice: 1500, savings: 300, stock: 8, discountPercentage: 20 }
  ];
}
