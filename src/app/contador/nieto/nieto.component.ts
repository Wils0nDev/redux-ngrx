import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador : number;
  @Output() resetContador = new EventEmitter<number>();
  constructor() {
    this.contador = 10;
   }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0;
    this.resetContador.emit(this.contador)
  }

}
