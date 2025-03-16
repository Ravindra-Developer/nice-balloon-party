import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nice_balloon_party';

  constructor(private router: Router) { }

  pageNotFound() {
    if (this.router.url.includes('/page-not-found')) {
      return false;
    }
    else {
      return true;
    }
  }

  scrollTop() {
    window.scrollTo(0, 0)

  }
}
