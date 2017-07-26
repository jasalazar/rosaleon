import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObrasService } from '../../services/obras.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html'
})
export class ObraComponent implements OnInit {

  obra:any = {};

  constructor( private activatedRoute: ActivatedRoute,
              private _obrasService:ObrasService ) {

    this.activatedRoute.params.subscribe( params =>{
      this.obra = this._obrasService.verObra( params['id'] );
    });

  }

  ngOnInit() {
  }

}
