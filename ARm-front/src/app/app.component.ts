import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ARm-front';

  constructor(private router: Router){}

  navigateTo(route: string){
    this.router.navigate(['/'+route])
  }
}
