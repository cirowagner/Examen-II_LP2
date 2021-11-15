import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from 'src/app/model/libro'

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  selectLibro: Libro = new Libro();
  title = "Registrar Libro";
  btn = "Agregar";
  API = "http://127.0.0.1:8000/api/libro/";

  constructor(private http:HttpClient) { }

  getLibros(){
    return this.http.get(this.API);
  }

  createLibro(libro:Libro){
    return this.http.post(this.API, libro);
  }

  updateLibro(id:number, libro:Libro){
    return this.http.put(this.API+id+"/", libro);
  }

  deleteLibro(id:number){
    return this.http.delete(this.API+id+"/");
  }
}
