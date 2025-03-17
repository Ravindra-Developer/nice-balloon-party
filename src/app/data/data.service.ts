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
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.07.jpeg', altTxt: 'Birthday Decoration 1' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.10 (1).jpeg', altTxt: 'Birthday Decoration 2' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.10 (2).jpeg', altTxt: 'Birthday Decoration 3' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.10.jpeg', altTxt: 'Birthday Decoration 4' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.11 (1).jpeg', altTxt: 'Birthday Decoration 5' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.11 (2).jpeg', altTxt: 'Birthday Decoration 6' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.11.jpeg', altTxt: 'Birthday Decoration 7' },
        { imgPath: 'assets/services/birthday/WhatsApp Image 2025-03-17 at 18.33.12.jpeg', altTxt: 'Birthday Decoration 8' },
        { imgPath: 'assets/images/nice-balloons-images/niceballon_image__004.jpg', altTxt: 'Birthday Decoration 9' },
        
      ],
    },
    {
      title: 'Welcome Baby',
      key: 'babyShower',
      images: [
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.35.38 (1).jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.35.38 (2).jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.35.38.jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.35.39 (1).jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.35.39.jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.36.04.jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.40.04.jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.41.23.jpeg', altTxt: 'Baby Shower Decoration 1' },
        { imgPath: 'assets/services/welcome_baby/WhatsApp Image 2025-03-17 at 18.43.46.jpeg', altTxt: 'Baby Shower Decoration 1' },
      ],
    },
    {
      title: 'Cartoon Theme',
      key: 'anniversary',
      images: [
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.07 (1).jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.07.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.08 (1).jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.08 (2).jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.08.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.49.44.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.50.14.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.50.36.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.51.14.jpeg', altTxt: 'Cartoon Theme 1' },
        { imgPath: 'assets/services/cartoon_theme/WhatsApp Image 2025-03-17 at 18.52.45.jpeg', altTxt: 'Cartoon Theme 1' }
      ],
    },
    {
      title: 'Anniversary',
      key: 'welcomeBaby',
      images: [
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.25 (1).jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.25.jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.26.jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.27 (1).jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.27 (2).jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.27.jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.28 (1).jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.28 (2).jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.55.28.jpeg', altTxt: 'Anniversary Decoration 1' },
        { imgPath: 'assets/services/anniversary/WhatsApp Image 2025-03-17 at 18.56.29.jpeg', altTxt: 'Anniversary Decoration 1' },
       ],
    },
    {
      title: 'Room Decoration',
      key: 'roomDecor',
      images: [
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.04 (1).jpeg', altTxt: 'Romm Decoration 1' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.04.jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.05.jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.09 (1).jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.09.jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.10 (1).jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.10 (2).jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.10.jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.11 (1).jpeg', altTxt: 'Romm Decoration 2' },
        { imgPath: 'assets/services/Room Decor/WhatsApp Image 2025-03-17 at 18.59.11.jpeg', altTxt: 'Romm Decoration 2' },
      ],
    },
    {
      title: 'Helium Ballons',
      key: 'heliumBallons',
      images: [
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.33.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.34.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.35 (1).jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.35.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.36.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.37 (1).jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.37.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.00.38.jpeg', altTxt: 'Helium Decoration 1' },
        { imgPath: 'assets/services/Helium/WhatsApp Image 2025-03-17 at 19.01.17.jpeg', altTxt: 'Helium Decoration 1' },
      ],
    },
    {
      title: 'Floor bouquet balloon',
      key: 'floorBouquetBalloon',
      images: [
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.51 (1).jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.51.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.52.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.53 (1).jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.53.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.54 (1).jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.54.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.55.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.56 (1).jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.02.56.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
        { imgPath: 'assets/services/floor_bouqet/WhatsApp Image 2025-03-17 at 19.03.46.jpeg', altTxt: 'Floor bouquet balloon Decoration 1' },
      ],
    },
    {
      title: 'Office',
      key: 'corporateDecoration',
      images: [
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.44 (1).jpeg', altTxt: 'Office Decoration 1' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.44.jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.45.jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.46 (1).jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.46.jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.47 (1).jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.47.jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.48.jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.49 (1).jpeg', altTxt: 'Office Decoration 2' },
        { imgPath: 'assets/services/office/WhatsApp Image 2025-03-17 at 19.05.49.jpeg', altTxt: 'Office Decoration 2' },
      ],
    },
  ]


  constructor() { }
}
