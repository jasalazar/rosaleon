import { Component, OnInit } from '@angular/core';
import { ObrasService, Obra } from '../../services/obras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html'
})
export class ObrasComponent implements OnInit {

  obras:Obra[] = [];

  constructor( private _obrasService:ObrasService,
              private router:Router ) {

  }

  ngOnInit() {
    this.obras = this._obrasService.getObras();
  }

  verObra( idx:number ){
    this.router.navigate( ['/obra',idx] );
  }

}
