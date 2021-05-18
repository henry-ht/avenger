import { Injectable } from '@angular/core';
import { HeroeInterface } from '../class/heroe-interface';
import { HeroesData } from '../domain/mocks/heroesData';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private dataH:HeroeInterface[] = HeroesData;
  constructor() { }

  getHeroes(): HeroeInterface[]{
    return this.dataH;
  }

  getHeroe(id:number):HeroeInterface {
    let value = this.dataH.find(value => value.idx == id);
    return value;
  }
}