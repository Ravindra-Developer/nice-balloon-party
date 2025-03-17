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
      return 'assets/services/birthday/WhatsApp Image 2025-03-17 at 17.48.44.jpeg'
    }
    else if (type == 'welcome-baby') {
      return 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 17.52.17.jpeg'
    }
    else if (type == 'cartoon-theme') {
      return 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 17.54.17.jpeg'
    }
    else if (type == 'anniversary') {
      return 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 17.56.00.jpeg'
    }
    else if (type == 'kids-birthday') {
      return 'assets/services/kids-birthday/WhatsApp Image 2025-03-17 at 17.58.04.jpeg'
    }
    else if (type == 'love-theme') {
      return 'assets/services/love-theme/WhatsApp Image 2025-03-17 at 18.00.28.jpeg'
    }
    else if (type == 'baby-shower') {
      return 'assets/services/baby-shower/WhatsApp Image 2025-03-17 at 18.03.42.jpeg'
    }
    else if (type == 'office') {
      return 'assets/services/office/WhatsApp Image 2025-03-17 at 18.08.02.jpeg'
    }
    else if (type == 'other-events') {
      return 'assets/services/other-events/WhatsApp Image 2025-03-17 at 18.08.41.jpeg'
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
