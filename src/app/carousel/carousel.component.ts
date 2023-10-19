import { Component,Input,OnInit } from '@angular/core';

interface carouselImages{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  implements OnInit{

  @Input() images:carouselImages[]=[]
  @Input() indicators=true;
  @Input() controls=true;
  selectedIndex=0
  ngOnInit(): void{

  }
  selectImage(index:number) : void{
     this.selectedIndex = index;

  }
  OnPrevClick() :void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;
    }else{
      this.selectedIndex--;
    }
  }
  OnNextClick() :void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }else{
      this.selectedIndex++;
    }
  }
}
