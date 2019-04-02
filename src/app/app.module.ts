import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroeComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroeComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
