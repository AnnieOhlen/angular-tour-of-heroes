import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe,
  ],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
