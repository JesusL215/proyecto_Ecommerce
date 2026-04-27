import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, CategoriesComponent, ProductListComponent],
  template: `
    <app-hero></app-hero>
    <app-categories></app-categories>
    <app-product-list></app-product-list>
  `
})
export class HomePageComponent {}
