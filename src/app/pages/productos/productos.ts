import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductoService } from '../../services/producto';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {

  private servicio = inject(ProductoService);

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  texto = '';

  categoriaSeleccionada = 'Todos';

  categorias = [
    'Todos',
    'Acción',
    'Aventura',
    'RPG',
    'Deportes',
    'Terror'
  ];

  ngOnInit(): void {

    this.servicio.getProductos().subscribe({
      next: (res) => {
        this.productos = res;
        this.productosFiltrados = [...res];
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  buscar() {

    this.filtrar();

  }

  seleccionarCategoria(categoria: string) {

    this.categoriaSeleccionada = categoria;

    this.filtrar();

  }

  filtrar() {

    this.productosFiltrados = this.productos.filter(p => {

      const coincideNombre =
        p.nombre.toLowerCase().includes(this.texto.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === 'Todos'
        || p.categoria === this.categoriaSeleccionada;

      return coincideNombre && coincideCategoria;

    });

  }

}
