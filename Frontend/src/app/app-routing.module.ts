import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent} from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {ComentariosComponent} from './comentarios/comentarios.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'comentarios', component: ComentariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
