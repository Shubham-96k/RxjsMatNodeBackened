import { Component, Inject, OnInit, inject } from '@angular/core';
import { Icourse } from '../../models/icourse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.scss']
})
export class CourseformComponent implements OnInit {
  coursedata !: Icourse;
  courseform !: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private course : Icourse,
    private fb : FormBuilder,
    private _matdialog : MatDialogRef<CourseformComponent>,
    private _coursesvc : CourseService
  ) { 
    this.oncreateform();
    this.coursedata = course;

    this.courseform.patchValue(course);
  }

  ngOnInit(): void {
    
  }

  oncreateform(){
    this.courseform = this.fb.group({
      description : ['', Validators.required],
      category : ['', Validators.required],
      longDescription : ['', Validators.required],
      releaseAt : ['', Validators.required]
    })
  }

  get f(){
    return  this.courseform.controls
  }

  onSave(){
    if(this.courseform.valid){
      let updtdobj = {...this.courseform.value, id : this.coursedata.id, iconUrl : this.coursedata.iconUrl}

      
      this._coursesvc.updatecourse(updtdobj)
        .subscribe(res => {
          this._coursesvc.changecatg$.next(true)
          this._matdialog.close(updtdobj)
        })
    }
  }

  onClose(){
    this._matdialog.close()
  }

}
