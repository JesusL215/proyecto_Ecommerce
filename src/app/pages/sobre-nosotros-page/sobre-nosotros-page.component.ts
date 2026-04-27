import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-sobre-nosotros-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-nosotros-page.component.html',
  styleUrls: ['./sobre-nosotros-page.component.scss']
})
export class SobreNosotrosPageComponent {
  values: ValueCard[] = [
    {
      title: 'Calidad Garantizada',
      description: 'Productos 100% originales con garantía oficial del fabricante',
      icon: 'assets/icon-quality.svg'
    },
    {
      title: '50,000+ Clientes',
      description: 'Miles de clientes satisfechos confían en nosotros',
      icon: 'assets/icon-clients.svg'
    },
    {
      title: 'Precisión',
      description: 'Asesoramiento experto para encontrar el producto perfecto',
      icon: 'assets/icon-precision.svg'
    },
    {
      title: 'Innovación',
      description: 'Siempre a la vanguardia de la tecnología',
      icon: 'assets/icon-innovation.svg'
    }
  ];
}
