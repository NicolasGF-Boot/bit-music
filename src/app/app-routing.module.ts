import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
