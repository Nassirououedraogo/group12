import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapters } from 'src/app/homepage/chapters.model';
import { HomepageService } from 'src/app/homepage/homepage.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
chapterDetail:Chapters;
  constructor(private route: ActivatedRoute,private homePage:HomepageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('listId');
      let idC= paramMap.get('courseId');
      let idCh=paramMap.get('chapterId');
      this.chapterDetail=this.homePage.getOneCategory(id).courses.find(courses=>courses.id==idC).chapters.find(chapters=>chapters.id==idCh);
    })

  }

}
