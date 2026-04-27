import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, Product } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  pageProducts: Product[] = [
    { id: 101, name: 'MacBook Air 13 Chip M3', image: 'assets/hero-image-1.png', salePrice: 1500, originalPrice: 1799, savings: 299, stock: 15, discountPercentage: 17 },
    { id: 102, name: 'Apple iPhone 14', image: 'assets/hero-image-2.png', salePrice: 1000, originalPrice: 1199, savings: 199, stock: 23, discountPercentage: 17 },
    { id: 103, name: 'Smart Watch Series 7', image: 'assets/prod-smartwatch.png', salePrice: 500, originalPrice: 599, savings: 99, stock: 30, discountPercentage: 17 },
    { id: 104, name: 'VRB01 Virtual Reality Glasses', image: 'assets/prod-vr.png', salePrice: 400, originalPrice: 499, savings: 99, stock: 12, discountPercentage: 20 },
    { id: 105, name: 'Xiaomi Wireless Buds Pro', image: 'assets/prod-xiaomi-buds.png', salePrice: 100, originalPrice: 149, savings: 49, stock: 45, discountPercentage: 33 },
    { id: 106, name: 'Laptop Gamer Acer Predator H18', image: 'assets/prod-acer.png', salePrice: 1500, originalPrice: 1899, savings: 399, stock: 8, discountPercentage: 21 },
    { id: 107, name: 'iPad Pro 13 M3', image: 'assets/prod-macbook.png', salePrice: 1000, originalPrice: 1299, savings: 299, stock: 18, discountPercentage: 23 },
    { id: 108, name: 'Audífonos Gamer Logitech G733', image: 'assets/prod-airpods.png', salePrice: 200, originalPrice: 249, savings: 49, stock: 25, discountPercentage: 20 },
    { id: 109, name: 'MacBook Pro 16 M3 Max', image: 'assets/hero-image-1.png', salePrice: 3500, originalPrice: 3999, savings: 499, stock: 5, discountPercentage: 12 },
    { id: 110, name: 'Samsung Galaxy S24 Ultra', image: 'assets/prod-s24.png', salePrice: 1200, originalPrice: 1499, savings: 299, stock: 20, discountPercentage: 20 },
    { id: 111, name: 'Dell XPS 15', image: 'assets/hero-image-2.png', salePrice: 1800, originalPrice: 2199, savings: 399, stock: 10, discountPercentage: 18 },
    { id: 112, name: 'PlayStation 5 Pro', image: 'assets/prod-ps5.png', salePrice: 500, originalPrice: 550, savings: 50, stock: 4, discountPercentage: 9 }
  ];
}
