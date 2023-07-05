import { Component,OnInit  } from '@angular/core';
import * as acitons from './contador/contador.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contador : number;

  constructor(private store : Store<AppState>){
    this.contador = 10;
    this.store.select('count').subscribe(counter => this.contador = counter)
  }
  ngOnInit(): void {
    this.store.subscribe(state =>{
      this.contador = state.count
     })
  }

  incrementCounter() : void{
    //this.contador = this.contador + 1
    this.store.dispatch(acitons.increment())
  }

  decrementCounter() : void{
    this.store.dispatch(acitons.decrement())
    //this.contador = this.contador - 1
  }
  cambioContador(event : number) : void{
    //this.contador = event
  }
}
