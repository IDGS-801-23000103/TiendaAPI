import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class ProductoService {

private api="https://localhost:7268/api/Productos";

constructor(private http:HttpClient){}

getProductos(){
return this.http.get<any[]>(this.api);
}

}
