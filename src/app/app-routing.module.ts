import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
  },

  { 
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule )
  },

  { 
    path: 'proveedores',
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./proveedores/proveedores.module').then( m => m.ProveedoresModule )
  },

  {
    path: '**',
    redirectTo: 'usuarios'

  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
