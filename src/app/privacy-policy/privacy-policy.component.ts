import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  title = 'Privacy policy - Nice Balloon Party decoration';

  constructor(private titleService: Title){
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
  }
}
