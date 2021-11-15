import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from 'src/app/model/autor'

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  selectAutor: Autor = new Autor();
  title = "Registrar Autor";
  btn = "Agregar";
  API = "http://127.0.0.1:8000/api/autor/";

  constructor(private http:HttpClient) { }

  getAutores(){
    return this.http.get(this.API);
  }

  createAutor(autor:Autor){
    return this.http.post(this.API, autor)
  }

  updateAutor(id:number, autor:Autor){
    return this.http.put(this.API+id+"/", autor)
  }

  deleteAutor(id:number){
    return this.http.delete(this.API+id+"/")
  }
}
