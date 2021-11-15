import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListComponent } from './component/autor-list/autor-list.component';
import { AutorAddComponent } from './component/autor-add/autor-add.component';
import { LibroListComponent } from './component/libro-list/libro-list.component';
import { LibroAddComponent } from './component/libro-add/libro-add.component'

const routes: Routes = [
  { path: '', component:AutorListComponent },
  { path: 'autor-add', component:AutorAddComponent },
  { path: 'libro-list', component:LibroListComponent },
  { path: 'libro-add', component:LibroAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
