import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { HeroeInterface } from 'src/app/class/heroe-interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  @Input('heroeInput') heroe:HeroeInterface;
  @Input('index') index:number;

  @Output() heroeSeleccionado: EventEmitter<number>  = new EventEmitter();

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  heroeEvent(){
    this.heroeSeleccionado.emit(this.index);
  }


}
