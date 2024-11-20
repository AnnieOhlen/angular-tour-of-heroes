import { Component } from '@angular/core';

@Component({
    //standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  title = 'Tour of Heroes';
}
