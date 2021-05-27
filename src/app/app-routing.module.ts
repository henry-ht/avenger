import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CarComponent } from './components/car/car.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  {
    path: 'heroe/:id',
    component: HeroeComponent
  },
  { 
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* , {useHash: true} */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
