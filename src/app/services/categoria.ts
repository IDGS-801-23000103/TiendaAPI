import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn:'root'
})
export class CategoriaService {

  private http = inject(HttpClient);

  private api="https://localhost:7268/api/Categorias";

  getCategorias(){
    return this.http.get<Categoria[]>(this.api);
  }

}
