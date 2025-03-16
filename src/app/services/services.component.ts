import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import WOW from 'wow.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  title = 'Services - Nice Balloon Party decoration';
  type: string = '';
  constructor(private router: Router, public global: GlobalService, private titleService: Title, private route: ActivatedRoute, private wowService: NgwWowService) {
    this.titleService.setTitle(this.title);
    window.scrollTo(0, 0)

    this.route.params.subscribe((params) => {
      this.type = params['type'];  // Capture the 'type' parameter
      console.log('Current service type:', this.type);  // You can use this to manage the content
    });
  }
  ngOnInit(): void {
    new WOW().init();
    this.wowService.init();
  }
  // navigateTo(val: any, tab: any) {
  //   this.router.navigate([val])
  //   this.global.activeTab = tab;
  //   sessionStorage.setItem('header', tab)
  // }
  returnImages(type: any): string {
    if (type == 'birthday') {
      return 'assets/images/nice-balloons-images/niceballon_image__009.jpg'
    }
    else if (type == 'welcome-baby') {
      return 'assets/images/nice-balloons-images/niceballon_image__003.jpg'
    }
    else if (type == 'cartoon-theme') {
      return 'assets/images/nice-balloons-images/niceballon_image__008.jpg'
    }
    else if (type == 'anniversary') {
      return 'assets/images/nice-balloons-images/niceballon_image__002.jpg'
    }
    else if (type == 'kids-birthday') {
      return 'assets/images/nice-balloons-images/niceballon_image__009.jpg'
    }
    else if (type == 'love-theme') {
      return 'assets/images/nice-balloons-images/niceballon_image__0014.jpg'
    }
    else if (type == 'baby-shower') {
      return 'assets/images/nice-balloons-images/niceballon_image__006.jpg'
    }
    else if (type == 'office') {
      return 'assets/images/nice-balloons-images/niceballon_image__0010.jpg'
    }
    else if (type == 'other-events') {
      return 'assets/images/nice-balloons-images/niceballon_image__0011.jpg'
    }
    else {
      return 'assets/images/nice-balloons-images/niceballon_image__005.jpg'
    }
  }

  returnHeading(type: any): string {
    if (type == 'birthday') {
      return 'Birthday Decorations'
    }
    else if (type == 'welcome-baby') {
      return 'Welcome Baby Decorations'
    }
    else if (type == 'cartoon-theme') {
      return 'Cartoon Theme Decorations'
    }
    else if (type == 'anniversary') {
      return 'Anniversary Celebrations'
    }
    else if (type == 'kids-birthday') {
      return `Kid's Birthday Decorations`
    }
    else if (type == 'love-theme') {
      return 'Love Theme Decorations'
    }
    else if (type == 'baby-shower') {
      return 'Baby Shower Decorations'
    }
    else if (type == 'office') {
      return 'Office Decoration '
    }
    else if (type == 'other-events') {
      return 'Other Events '
    }
    else {
      return 'Elevate Your Celebrations'
    }
  }

}
