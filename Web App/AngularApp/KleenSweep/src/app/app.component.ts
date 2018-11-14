import { Component, OnInit, AfterContentInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {

  title = 'app';

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    var containerBricks = $('.masonry');

    containerBricks.imagesLoaded(function () {
      console.log("loaded image");
      containerBricks.masonry({
        itemSelector: '.masonry__brick',
        resize: true
      });
    });
  }


}
