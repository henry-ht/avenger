import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeInterface } from '../../class/heroe-interface';
import { SearchObserveService } from './../../services/search-observe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes:HeroeInterface[];
  public heroesTabala:HeroeInterface[] = [];
  searchItem:string = '';
  ele_h:any;

  @ViewChild('elemntInput') ele;
  constructor(private h:HeroesService, private router:Router, private  searchObv:SearchObserveService) { 
    this.heroes = this.h.getHeroes();
    this.searchObv.getTextSearch$()
    .subscribe((data) => {
      this.searchItem = data;
    });
  }
  
  ngOnInit(): void {
    
  }

  verHeroe(id:number){
    this.router.navigate(['heroe', id])
  }

  pasarDatos(){
    let h = JSON.stringify(this.heroes);
    this.heroesTabala = JSON.parse(h);
  }


}
