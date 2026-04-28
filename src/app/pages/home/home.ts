import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CATEGORIES, PRODUCTS } from '../../data/products';

interface HeroBanner {
  title: string;
  description: string;
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
  images: { src: string; alt: string }[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @ViewChild('categoryTrack') categoryTrack?: ElementRef<HTMLDivElement>;

  products = PRODUCTS.slice(0, 8);
  categories = CATEGORIES.filter(category => category !== 'Todos');

  banners: HeroBanner[] = [
    {
      title: 'Potencia tu rendimiento',
      description: 'Descubre nuestra selección exclusiva de laptops de última generación. Desde estaciones de trabajo para creadores hasta bestias gaming de alto rendimiento, MasterTech tiene el equipo perfecto para ti.',
      primaryText: 'Descubrir',
      primaryLink: '/productos',
      secondaryText: 'Ver Ofertas',
      secondaryLink: '/ofertas',
      images: [
        { src: 'assets/products/pc.webp', alt: 'Setup gamer MasterTech' },
        { src: 'assets/products/Laptop.webp', alt: 'Laptop MasterTech' }
      ]
    },
    {
      title: 'Ofertas en laptops gaming',
      description: 'Encuentra equipos gamer con alto rendimiento, gráficos potentes y descuentos especiales para que juegues, estudies o trabajes sin límites.',
      primaryText: 'Comprar ahora',
      primaryLink: '/ofertas',
      secondaryText: 'Ver productos',
      secondaryLink: '/productos',
      images: [
        { src: 'assets/products/laptop2.webp', alt: 'Laptop gamer Acer Predator' },
        { src: 'assets/products/pc2.webp', alt: 'PC gamer MasterTech' }
      ]
    },
    {
      title: 'Accesorios con descuento',
      description: 'Completa tu setup con audífonos, relojes, tablets y periféricos seleccionados con precios especiales por tiempo limitado.',
      primaryText: 'Ver accesorios',
      primaryLink: '/productos',
      secondaryText: 'Ver ofertas',
      secondaryLink: '/ofertas',
      images: [
        { src: 'assets/products/audifonos3.webp', alt: 'Audífonos gamer Logitech' },
        { src: 'assets/products/inalambricos.webp', alt: 'Audífonos inalámbricos Xiaomi' }
      ]
    }
  ];

  currentBannerIndex = 0;

  get currentBanner(): HeroBanner {
    return this.banners[this.currentBannerIndex];
  }

  nextBanner(): void {
    //this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
  }

  previousBanner(): void {
    //this.currentBannerIndex =
      //(this.currentBannerIndex - 1 + this.banners.length) % this.banners.length;
  }

  imageForCategory(category: string): string {
    const product = PRODUCTS.find(item => item.category === category);
    return product?.image ?? 'assets/products/desktop.svg';
  }

  scrollCategories(direction: 'left' | 'right'): void {
    const track = this.categoryTrack?.nativeElement;

    if (!track) return;

    track.scrollBy({
      left: direction === 'right' ? 260 : -260,
      behavior: 'smooth'
    });
  }
}