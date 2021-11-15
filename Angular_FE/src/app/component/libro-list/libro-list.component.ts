import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { LibroService } from 'src/app/service/libro.service';
import { Libro } from 'src/app/model/libro'

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  public librosList:any;
  libros:any;

  constructor(private libroService:LibroService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    this.libroService.getLibros().subscribe((libros:any)=>{
      this.libroService.title = "Registrar Libro";
      this.libroService.btn = "Agregar";
      this.librosList=libros;
    });
  }

  onEdit(libro:Libro){
    console.log(libro);
    this.libroService.selectLibro = Object.assign({},libro);
    this.libroService.title = "Actualizar Libro";
    this.libroService.btn = "Actualizar";
    this.router.navigate(["libro-add"]);
  }

  onDelete(id:number){
    console.log(id);
    if(confirm("¿Estas seguro?")){
      this.libroService.deleteLibro(id).subscribe((response) => {
        this.onList();
        this.toastr.warning("El libro se ha eliminado", "Libro Eliminado", {
          positionClass: 'toast-bottom-right'
        });
      });
    }
  }

}
