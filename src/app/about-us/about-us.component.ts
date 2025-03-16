import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import WOW from 'wow.js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  title = 'About us - Nice Balloon Party decoration';

constructor(private titleService: Title, private wowService: NgwWowService){
  this.titleService.setTitle(this.title);

  window.scrollTo(0, 0)
}

ngOnInit(): void { 
  new WOW().init();
  this.wowService.init();
}
}
