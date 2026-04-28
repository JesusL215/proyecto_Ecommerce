import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BRANDS, CATEGORIES, Product, PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class ProductsPage {
  private route = inject(ActivatedRoute);

  products = PRODUCTS;
  categories = CATEGORIES;
  brands = BRANDS;
  selectedCategory = 'Todos';
  selectedBrand = 'Todos';
  selectedPrice = 'Todos';

  priceRanges = ['Todos', 'Menos de $500', '$500 - $1000', '$1000 - $2000', 'Más de $2000'];

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedCategory = params.get('categoria') ?? 'Todos';
    });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const categoryOk = this.selectedCategory === 'Todos' || product.category === this.selectedCategory;
      const brandOk = this.selectedBrand === 'Todos' || product.brand === this.selectedBrand;
      const priceOk =
        this.selectedPrice === 'Todos' ||
        (this.selectedPrice === 'Menos de $500' && product.price < 500) ||
        (this.selectedPrice === '$500 - $1000' && product.price >= 500 && product.price <= 1000) ||
        (this.selectedPrice === '$1000 - $2000' && product.price > 1000 && product.price <= 2000) ||
        (this.selectedPrice === 'Más de $2000' && product.price > 2000);

      return categoryOk && brandOk && priceOk;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  selectBrand(brand: string): void {
    this.selectedBrand = brand;
  }

  selectPrice(price: string): void {
    this.selectedPrice = price;
  }

  clearFilters(): void {
    this.selectedCategory = 'Todos';
    this.selectedBrand = 'Todos';
    this.selectedPrice = 'Todos';
  }
}
