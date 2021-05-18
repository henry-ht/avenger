import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeTablaComponent } from './components/heroe-tabla/heroe-tabla.component';
import { SpacePipe } from './pipes/space.pipe';
import { FormsModule } from '@angular/forms';
import { HeroeFilterPipe } from './pipes/heroe-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeCardComponent,
    HeroeTablaComponent,
    SpacePipe,
    HeroeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
