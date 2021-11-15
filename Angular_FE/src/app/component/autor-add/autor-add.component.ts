import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AutorService } from 'src/app/service/autor.service';
import { Autor } from 'src/app/model/autor'

@Component({
  selector: 'app-autor-add',
  templateUrl: './autor-add.component.html',
  styleUrls: ['./autor-add.component.css']
})
export class AutorAddComponent implements OnInit {

  constructor(public autorService:AutorService, private router:Router, private toastr:ToastrService) { }

  public title = this.autorService.title;
  public btn = this.autorService.btn;

  ngOnInit(): void{

  }

  onSubmit(autorForm: NgForm){

    if(autorForm.value.id == null){
      this.autorService.createAutor(autorForm.value).subscribe((response) => {
        this.router.navigate(["/"]);
        this.toastr.success('El autor se inserto con exito', 'Autor Insertado', {
          positionClass: 'toast-bottom-right'
        });
      });
    }else{
      this.autorService.updateAutor(autorForm.value.id, autorForm.value).subscribe((response) => {
        this.router.navigate(["/"]);
        this.toastr.info('El autor se actualizó con exito', 'Autor Actualizado', {
          positionClass: 'toast-bottom-right'
        });
      });
    }

    this.resetForm(autorForm);
  }

  resetForm(autorForm: NgForm){
    if(autorForm != null){
      autorForm.reset();
      this.autorService.selectAutor = new Autor();
    }
  }

}
