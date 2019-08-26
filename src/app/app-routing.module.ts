import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaComponent } from './persona/persona.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegistrosComponent } from './registros/registros.component';
import { AuthGuard } from './auth.guard';
import { ActualizaruserComponent } from './actualizaruser/actualizaruser.component';
import { PerfilComponent } from './perfil/perfil.component';



const routes: Routes = [
  {
   path: 'users',
   component: UserComponent,
   canActivate: [AuthGuard]
   
  },

  {
    path: 'login',
   component: LoginComponent
  },

  {
    path: 'registros',
   component: RegistrosComponent,
   canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
   component: PerfilComponent,
   canActivate: [AuthGuard]
  },

  {
    path: 'update',
    component: ActualizaruserComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'update/:id',
    component: ActualizaruserComponent
  },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserComponent, LoginComponent, PersonaComponent, RegistrosComponent ]
