import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contenedor:string;
  constructor(public navCtrl: NavController) {

  }
  public cambiar(value:string):void{
    value=value.replace(/[^0-9,]/g,'');
    
    if((value.match(/,/g) || []).length>1)
      value=this.modificar(value.toString());
    else
      value=value.replace(/\B(?=(\d{3})+(?!\d))/g,'.');
    this.contenedor=value;
  }
  public modificar(val:string):string{
    //variable auxiliar para almacenar la parte entera y decimal
    let aux:string[];
    //dividimos el número en dos partes usando la coma como separador
    aux=val.split(/,/);
    //"filtramos" las dos partes resultantes
    aux.forEach((num,indx,arr)=>{arr[indx]=num.replace(/[^0-9]/g,'')});
    //este es la expresión regular que añade los puntos
    aux[0]=aux[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.');
    //unimos la parte entera con la fraccionaria
    val=aux[0]+","+aux[1];
    return val;
  }
}
