import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent {
  title = 'Terms and condition - Nice Balloon Party decoration';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
  }
}
