import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Observable, debounce, debounceTime, distinctUntilChanged, of, startWith, switchMap } from 'rxjs';
import { Icourse, Ilesson } from '../../models/icourse';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.scss']
})
export class ViewcourseComponent implements OnInit {
  courseId !: string;
  viewcourse$ !: Observable<Icourse>;
  courseform !: FormGroup;
  lesson$ !: Observable<Ilesson[]>;
  orgarr !: Array<Ilesson>;
  lessons !: Array<Ilesson>;

  constructor(
    private _routes : ActivatedRoute,
    private _coursesvc : CourseService
  ) { }

  ngOnInit(): void {
    this.courseId = this._routes.snapshot.params['id'];
    this.viewcourse$ = this._coursesvc.getcourse(this.courseId)
    

    this.courseform = new FormGroup({
      lesson : new FormControl(null , Validators.required)
    })

    // this.lesson$ = this._coursesvc.getlesson(this.courseId)

    this._coursesvc.getlesson(this.courseId)
    .subscribe(res => {
      this.orgarr = res
      this.lessons = res
    })

    //  this.courseform.get('lesson')
    // ?.valueChanges
    // .pipe(
    //   startWith(''),
    //   debounceTime(1500),
    //   distinctUntilChanged(),
    //   // switchMap(val => this._coursesvc.getlesson(this.courseId, 10, val))
    //   switchMap(val => {
    //    return this.lessons = this.lessons.filter(ele => ele.description.includes(val));
    //   })
    // )!


    this.courseform.get('lesson')
    ?.valueChanges.subscribe(res => {
      if(res){
        
      this.lessons = this.lessons.filter(ele => ele.description.toLowerCase().includes(res.toLowerCase().trim()))
      }else{
        this.lessons = this.orgarr
      }
    })
  }

 

}
