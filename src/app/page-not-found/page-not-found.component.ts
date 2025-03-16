import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  title = 'Page not found - waw ballons decoration';
  constructor(private titleService: Title){
    this.titleService.setTitle(this.title);

  }
}
