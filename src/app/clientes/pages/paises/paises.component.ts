import { Component, OnInit } from '@angular/core';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {


  paises = [];

  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe( (resp: any ) => {
      this.paises = resp;
    })
  }

}
