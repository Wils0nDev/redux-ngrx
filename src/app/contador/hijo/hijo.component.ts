import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  // @Input() contador : number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador : number;
  constructor(private store : Store<AppState>) {
   this.contador = 10;
   }

  ngOnInit(): void {
    this.store.select('count').subscribe(counter => this.contador = counter);
  }
  multiplicar(){
    //this.contador *= 2
    this.store.dispatch(actions.multiply())
    // this.cambioContador.emit(this.contador)
  }

  dividir():void{
    //this.contador /= 2
    this.store.dispatch(actions.divide())
    // this.cambioContador.emit(this.contador)
  }

  // resetHijo(event:number):void{
  //   this.contador = event
  //   this.cambioContador.emit(this.contador);
  // }

 
  

}
