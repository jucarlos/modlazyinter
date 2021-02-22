import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ComprasComponent } from './pages/compras/compras.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


@NgModule({
  declarations: [ComprasComponent, AlmacenComponent, PedidosComponent],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
