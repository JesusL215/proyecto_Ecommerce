import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.scss'
})
export class OfertasComponent {
  products = PRODUCTS.filter(product => product.discount >= 20).slice(0, 6);
}
