import { Injectable } from '@angular/core';

@Injectable()
export class ObrasService {

  private obras:Obra[] = [

    {
      nombre: "Primera",
      img: "assets/img/1.jpeg"
    },
    {
      nombre: "Segunda",
      img: "assets/img/2.jpeg"
    },
    {
      nombre: "Tercera",
      img: "assets/img/3.jpeg"
    },
    {
      nombre: "Cuarta",
      img: "assets/img/4.jpeg"
    }

  ];

  getObras():Obra[]{
    return this.obras;
  }

  verObra( idx:string ){
    return this.obras[idx];
  }

}

export interface Obra {
  nombre: string;
  img: string;
}
