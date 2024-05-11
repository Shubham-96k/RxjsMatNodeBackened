import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icourse, Icoursesresp, Ilesson, Ilessonresp } from '../models/icourse';
import { Observable, Subject, map, shareReplay, tap } from 'rxjs';
import { IconResolver } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  changecatg$ : Subject<boolean>  = new Subject()
  courseUrl : string = `${environment.baseUrl}/courses`

  constructor(
    private http : HttpClient
  ) { }

  fetchallcourse(): Observable<Icourse[]>{
    return this.http.get<Icoursesresp>(this.courseUrl)
          .pipe(
            map(res => res['payload'])
          )
  }

  updatecourse(course : Icourse) : Observable<Icourse>{
    let updtUrl = `${this.courseUrl}/${course.id}`;
    return this.http.put<Icourse>(updtUrl, course)
  }

  getcourse(courseId : string) : Observable<Icourse>{
    let singlecourseUrl = `${this.courseUrl}/${courseId}`;
    return this.http.get<Icourse>(singlecourseUrl);
  }

  getlesson(courseId: string, pageSize : number = 15, filter = '') : Observable<Array<Ilesson>>{
    let lessonUrl = `${environment.baseUrl}/lessons`;

    let param = new HttpParams()
      .set('courseId', courseId)
      .set('pageSize', pageSize)
      .set('filter', filter)

      return this.http.get<Ilessonresp>(lessonUrl, {
        params : param
      })
      .pipe(
        map(res => res['payload'])
      )
  }
  
}
