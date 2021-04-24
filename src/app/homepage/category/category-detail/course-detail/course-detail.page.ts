import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/homepage/category.model';
import { Courses } from 'src/app/homepage/courses.model';
import { HomepageService } from 'src/app/homepage/homepage.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
courseDetail:Courses;
oneCourse:Courses
  constructor(private route: ActivatedRoute, private homepage:HomepageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('listId');
      let idC= paramMap.get('courseId');
      this.courseDetail=this.homepage.getOneCategory(id).courses.find(courses=>courses.id==idC);
    })
  }

}
