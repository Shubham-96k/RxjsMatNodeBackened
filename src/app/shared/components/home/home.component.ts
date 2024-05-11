import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable, map, of } from 'rxjs';
import { Icourse } from '../../models/icourse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beginnercoursearr !: Array<Icourse>;
  advancecoursearr !: Array<Icourse>;

  constructor(
    private _coursesvc : CourseService
  ) { }

  ngOnInit(): void {
    this.fetchallcourse();

    this._coursesvc.changecatg$
    .subscribe(res => {
      if(res){
        this.fetchallcourse();
      }
    })
  }

  fetchallcourse(){
    this._coursesvc.fetchallcourse()
      .subscribe(courses => {
        this.beginnercoursearr = courses.filter(course => course.category === 'BEGINNER');
        this.advancecoursearr = courses.filter(course => course.category === 'ADVANCED');
      })
  }
  

}
