import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carousel1';
  images = [
    {
      imageSrc: "assets/images/electronics.jpeg",
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'assets/images/jewellery.jpeg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'assets/images/man.jpeg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'assets/images/woman.jpg',
      imageAlt: 'person2',
    },
  ] 
}
