import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  router: RouterModule;
  constructor(router: RouterModule) {
    this.router = router;
  }
  title = 'angular-19';
}
