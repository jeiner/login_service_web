import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaComponent } from './persona/persona.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
   path: 'users',
   component: UserComponent
  },

  {
    path: 'login',
   component: LoginComponent
  },

  {
    path: 'clientes',
    component: PersonaComponent
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

export const routingComponents = [UserComponent, LoginComponent, PersonaComponent ]
