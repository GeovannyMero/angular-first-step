import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'heroes-app',
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}


