import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero',
  templateUrl: 'hero.component.html'

})

export class HeroeComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }
  hero: Hero = {
    id: 1,
    name: 'Geovanny', 
    lastName: 'Mero'
  }
save(){
  console.log(JSON.stringify(this.hero));
  alert(JSON.stringify(this.hero));
}
}