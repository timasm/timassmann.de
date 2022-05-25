import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['caffee-laptop.jpg', 'coding-laptop.jpg', 'laptop.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to Code', 
    'Graduated at Uni Mainz'
    ];
  currentImage = 0;
  showImage = true;

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage(): void {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 5);
    }, 8000);
  }
}
