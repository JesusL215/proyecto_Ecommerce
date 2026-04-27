import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories = [
    { name: 'Teclados & Mouse', image: 'assets/cat-teclados.png' },
    { name: 'Audio', image: 'assets/cat-audio.png' },
    { name: 'Smart Home', image: 'assets/cat-smarthome.png' },
    { name: 'Cámaras', image: 'assets/cat-camaras.png' },
    { name: 'Componentes PC', image: 'assets/cat-componentes.png' },
    { name: 'Laptops', image: 'assets/cat-laptops.png' },
    { name: 'Smartphones', image: 'assets/cat-smartphones.png' },
    { name: 'Tablets', image: 'assets/cat-tablets.png' },
    { name: 'Gaming', image: 'assets/cat-gaming.png' },
    { name: 'Accesorios', image: 'assets/cat-accesorios.png' },
    { name: 'Monitores', image: 'assets/cat-monitores.png' }
  ];

  scrollLeft(container: HTMLElement) {
    // Scroll aproximado de 2 items + gaps
    container.scrollBy({ left: -490, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 490, behavior: 'smooth' });
  }
}
