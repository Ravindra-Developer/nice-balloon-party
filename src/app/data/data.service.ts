import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  galleryData:any = [
    
    {
      title: 'Birthday',
      key: 'birthday',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__003.jpg', altTxt: 'Birthday Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__004.jpg', altTxt: 'Birthday Decoration 2' },
      ],
    },
    {
      title: 'Welcome Baby',
      key: 'babyShower',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__005.jpg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__006.jpg', altTxt: 'Baby Shower Decoration 2' },
      ],
    },
    {
      title: 'Cartoon Theme',
      key: 'anniversary',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__007.jpg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__008.jpg', altTxt: 'Cartoon Theme 2' },
      ],
    },
    {
      title: 'Anniversary',
      key: 'welcomeBaby',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__009.jpg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0010.jpg', altTxt: 'Anniversary Decoration 2' },
      ],
    },
    {
      title: `Kid's Birthday`,
      key: 'heliumBalloons',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0011.jpg', altTxt: 'Kids Birthday Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0012.jpg', altTxt: 'Kids Birthday Decoration 2' },
      ],
    },
    {
      title: 'Love Theme',
      key: 'roomDecor',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0013.jpg', altTxt: 'Love Theme Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0014.jpg', altTxt: 'Love Theme Decoration 2' },
      ],
    },
    {
      title: 'Baby Shower',
      key: 'corporateDecoration',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0015.jpg', altTxt: 'Corporate Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0016.jpg', altTxt: 'Corporate Decoration 2' },
      ],
    },
    {
      title: 'Office',
      key: 'corporateDecoration',
      images: [
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0017.jpg', altTxt: 'Office Decoration 1' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__0018.jpg', altTxt: 'Office Decoration 2' },
      ],
    },
  ]


  constructor() { }
}
