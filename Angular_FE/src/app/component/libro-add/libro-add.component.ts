import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { LibroService } from 'src/app/service/libro.service';
import { AutorService } from 'src/app/service/autor.service';
import { Libro } from 'src/app/model/libro'

@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.css']
})
export class LibroAddComponent implements OnInit {

  public autorList:any;
  autores:any;

  constructor(public libroService:LibroService, private autorService:AutorService, private router:Router, private toastr:ToastrService) { }

  public title = this.libroService.title;
  public btn = this.libroService.btn;

  ngOnInit(): void {
    this.autorService.getAutores().subscribe((autores:any)=>{
      console.log(autores);
      this.autorList=autores;
    });
  }

  onSubmit(libroForm: NgForm){

    if(libroForm.value.id == null){
      this.libroService.createLibro(libroForm.value).subscribe((response) => {
        this.router.navigate(["libro-list"]);
        this.toastr.success('El libro se inserto con exito', 'Libro Insertado', {
          positionClass: 'toast-bottom-right'
        });
      });
    }else{
      this.libroService.updateLibro(libroForm.value.id, libroForm.value).subscribe((response) => {
        this.router.navigate(["libro-list"]);
        this.toastr.info('El libro se actualizó con exito', 'Libro Actualizado', {
          positionClass: 'toast-bottom-right'
        });
      });
    }

    this.resetForm(libroForm);
  }

  resetForm(libroForm: NgForm){
    if(libroForm != null){
      libroForm.reset();
      this.libroService.selectLibro = new Libro();
    }
  }

}
