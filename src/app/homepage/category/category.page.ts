import { Component, OnInit } from '@angular/core';
import { Categories } from '../category.model';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  listOfCategory:Categories[]
  constructor(private homePage:HomepageService) { }

  ngOnInit() {
    this.listOfCategory=this.homePage.getCategoryList()
  }

}
