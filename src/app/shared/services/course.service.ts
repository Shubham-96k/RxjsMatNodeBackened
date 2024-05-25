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
  
  changecatg$ : Subject<boolean>  = new Subject();
  coursekey : string = '-NyhFzNdyLDZ57DA7ECr';
  lessonkey : string = "-NyhIJ2EcvWR9kNkyrt3";
  courseUrl : string = `${environment.baseUrl}/courses`

  constructor(
    private http : HttpClient
  ) { }

  fetchallcourse(): Observable<Icourse[]>{
    return this.http.get<Icourse[]>(this.courseUrl + ".json")
          .pipe(
            map((res : any) => {
              return res[this.coursekey]
            }
            )
          )
  }

  updatecourse(course : Icourse) : Observable<Icourse>{
    let updtUrl = `${this.courseUrl}/${this.coursekey}/${course.id}.json`;
    return this.http.put<Icourse>(updtUrl, course)
  }

  getcourse(courseId : string) : Observable<Icourse>{
    let singlecourseUrl = `${this.courseUrl}/${this.coursekey}/${courseId}.json`;
    return this.http.get<Icourse>(singlecourseUrl);
  }

  getlesson(courseId: string, pageSize : number = 15, filter = '') : Observable<Array<Ilesson>>{
    let lessonUrl = `${environment.baseUrl}/lessons.json`;

    let param = new HttpParams()
      .set('courseId', courseId)
      .set('pageSize', pageSize)
      .set('filter', filter)

      return this.http.get<Ilesson[]>(lessonUrl, {
        params : param
      })
      .pipe(
        map((res : any) => res[this.lessonkey])
      )
  }
  
}
