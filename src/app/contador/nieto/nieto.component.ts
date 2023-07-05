import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  //@Input() contador : number;
  //@Output() resetContador = new EventEmitter<number>();
  contador:number
  constructor(private store : Store<AppState>) {
    this.contador = 0
    this.store.select('count').subscribe(
      counter => 
      this.contador = counter
      );

   }

  ngOnInit(): void {
  }

  reset(){
    this.store.dispatch(reset())
    // this.contador = 0;
    // this.resetContador.emit(this.contador)
  }

}
