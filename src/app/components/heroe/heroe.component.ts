import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from 'src/app/class/heroe-interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroe:HeroeInterface;

  constructor(private route:ActivatedRoute, private heroes:HeroesService) {
    
    this.route.params.subscribe(params => {
      this.heroe = this.heroes.getHeroe(params['id']);
    });

   }

  ngOnInit(): void {
  }

}


