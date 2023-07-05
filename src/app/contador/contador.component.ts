import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador.actions';
interface AppState {
  count : number;
}
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador! : number
  constructor(private store: Store<AppState>) {
    //select: permite seleccionar el nodo que nos interesa, en este caso el count
    this.store.select('count').subscribe( count => this.contador = count  )
   }

  ngOnInit(): void {
  }

  incrementar(){
    this.store.dispatch(actions.increment())
    // this.contador++
  }
  decrementar(){
    this.store.dispatch(actions.decrement())
    // this.contador--
  }

}
