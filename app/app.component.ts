import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeService } from './resize/resize.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private resizeService: ResizeService) {}
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeService.setSizePx(event.target.innerWidth);
  }

  ngOnInit() {
    this.resizeService.setSizePx(window.innerWidth);
  }
}
