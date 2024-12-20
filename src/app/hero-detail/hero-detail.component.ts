import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrl: './hero-detail.component.scss',
    imports: [
        FormsModule,
        NgIf,
        UpperCasePipe,
    ]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(private readonly route: ActivatedRoute,
    private readonly heroService: HeroService,
    private readonly location: Location) {

    }

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      if (this.hero) {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
      }
    }

}