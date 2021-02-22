import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { AlbaranesComponent } from './pages/albaranes/albaranes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { ClientesRoutingModule } from './cliente.routing';
import { PaisesComponent } from './pages/paises/paises.component';



@NgModule({
  declarations: [
    MantenimientoComponent,
    AlbaranesComponent,
    FacturasComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
