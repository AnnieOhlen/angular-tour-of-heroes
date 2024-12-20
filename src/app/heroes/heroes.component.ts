import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.scss',
    imports: [
        FormsModule,
        NgFor,
        RouterLink
    ]
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private readonly heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}