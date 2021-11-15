import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/service/autor.service';
import { Autor } from 'src/app/model/autor'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {

  public autoresList:any;
  autores:any;

  constructor(private autorService:AutorService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    this.autorService.getAutores().subscribe((autores:any)=>{
      this.autorService.title = "Registrar Autor";
      this.autorService.btn = "Agrerar";
      this.autoresList=autores;
    });
  }

  onEdit(autor:Autor){
    this.autorService.selectAutor = Object.assign({},autor);
    this.autorService.title = "Actualizar Autor";
    this.autorService.btn = "Actualizar";
    this.router.navigate(["autor-add"]);
  }

  onDelete(id:number){
    if(confirm("¿Estas seguro?")){
      this.autorService.deleteAutor(id).subscribe((response) => {
        this.onList();
        this.toastr.warning("El autor se ha eliminado", "Autor Eliminado", {
          positionClass: 'toast-bottom-right'
        });
      });
    }
  }
}
