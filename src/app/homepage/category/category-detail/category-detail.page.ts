import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../../category.model';
import { HomepageService } from '../../homepage.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
categoryDetail:Categories;
  constructor(private route: ActivatedRoute, private homepage:HomepageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{let id= paramMap.get('listId');
    this.categoryDetail=this.homepage.getOneCategory(id);
  })

  }

}
