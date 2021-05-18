import { BinaryOperatorExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { HeroeInterface } from 'src/app/class/heroe-interface';

@Component({
  selector: 'app-heroe-tabla',
  templateUrl: './heroe-tabla.component.html',
  styleUrls: ['./heroe-tabla.component.scss']
})
export class HeroeTablaComponent implements OnInit {

  @Input('heroes') heroes:HeroeInterface[];
  constructor() { 
    dayjs.extend(relativeTime);
  }

  ngOnInit(): void {
    
  }
  
  deleteItem(i:number){
    this.heroes.splice(i, 1);
  }

  showModal(data:HeroeInterface): void{
    window['Swal'].fire({
      title: data.nombre,
      text: data.casa,
      imageUrl: data.img,
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: 'Custom image',
     })
  }

  fronNow(date:string){
    let d = dayjs(date);
    return d.fromNow();
  }
}
