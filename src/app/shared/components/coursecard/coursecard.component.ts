import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../models/icourse';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CoursedialogComponent } from '../coursedialog/coursedialog.component';
import { CourseformComponent } from '../courseform/courseform.component';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss']
})
export class CoursecardComponent implements OnInit {

  @Input() getcourse !: Icourse;

  constructor(
    private _matdialog : MatDialog
  ) { }

  ngOnInit(): void {

  }

  onEdit(){
    let dialgoconfig = new MatDialogConfig()


    dialgoconfig.data = this.getcourse;
    dialgoconfig.width = '500px';
    dialgoconfig.disableClose = false;
    dialgoconfig.autoFocus = false;

    const dialogref = this._matdialog.open(CourseformComponent, dialgoconfig)

    dialogref.afterClosed()
      .subscribe(res => {
        if(res){
          this.getcourse = res;
        }
      })
  }

  
}
