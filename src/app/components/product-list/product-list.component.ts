import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  image: string;
  salePrice: number;
  originalPrice: number;
  savings: number;
  stock: number;
  discountPercentage: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() isOffer: boolean = false;
  @Input() products: Product[] = [
    {
      id: 1,
      name: 'Xiaomi Wireless Buds Pro',
      image: './assets/productos/image5.png',
      salePrice: 70,
      originalPrice: 100,
      savings: 30,
      stock: 45,
      discountPercentage: 30
    },
    {
      id: 2,
      name: 'Smart Watch Series 7',
      image: 'assets/image3.png',
      salePrice: 299,
      originalPrice: 399,
      savings: 100,
      stock: 12,
      discountPercentage: 25
    },
    {
      id: 3,
      name: 'VRB01 Virtual Reality Glasses',
      image: 'assets/image4.png',
      salePrice: 349,
      originalPrice: 499,
      savings: 150,
      stock: 8,
      discountPercentage: 30
    },
    {
      id: 4,
      name: 'Laptop Gamer Acer Predator H18',
      image: 'assets/image6.png',
      salePrice: 1299,
      originalPrice: 1599,
      savings: 300,
      stock: 5,
      discountPercentage: 18
    },
    {
      id: 5,
      name: 'Apple AirPods Max',
      image: 'assets/image5.png',
      salePrice: 450,
      originalPrice: 550,
      savings: 100,
      stock: 20,
      discountPercentage: 18
    },
    {
      id: 6,
      name: 'MacBook Air 13 Chip M3',
      image: 'assets/image1.png',
      salePrice: 1099,
      originalPrice: 1299,
      savings: 200,
      stock: 15,
      discountPercentage: 15
    },
    {
      id: 7,
      name: 'Samsung Galaxy S24 Ultra',
      image: 'assets/image2.png',
      salePrice: 1199,
      originalPrice: 1399,
      savings: 200,
      stock: 30,
      discountPercentage: 14
    },
    {
      id: 8,
      name: 'Sony PlayStation 5 Pro',
      image: 'assets/image2.png',
      salePrice: 499,
      originalPrice: 549,
      savings: 50,
      stock: 3,
      discountPercentage: 9
    }
  ];
}
