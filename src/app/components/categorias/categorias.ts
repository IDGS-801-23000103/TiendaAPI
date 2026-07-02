import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaService } from '../../services/categoria';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector:'app-categorias',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./categorias.html',
  styleUrl:'./categorias.css'
})

export class CategoriasComponent{

  private servicio=inject(CategoriaService);

  categorias:Categoria[]=[];

  @Output()
  categoriaSeleccionada=new EventEmitter<string>();

  ngOnInit(){

    this.servicio.getCategorias().subscribe(res=>{

      this.categorias=res;

    });

  }

  seleccionar(nombre:string){

    this.categoriaSeleccionada.emit(nombre);

  }

}
