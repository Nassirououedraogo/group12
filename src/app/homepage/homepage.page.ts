import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  getCategoryList(): import("./category.model").Categories[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() {
  }

}
