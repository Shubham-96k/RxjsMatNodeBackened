import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { CoursecardComponent } from './shared/components/coursecard/coursecard.component';
import { ViewcourseComponent } from './shared/components/viewcourse/viewcourse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './shared/components/about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursedialogComponent } from './shared/components/coursedialog/coursedialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseformComponent } from './shared/components/courseform/courseform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursecardComponent,
    ViewcourseComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursedialogComponent,
    CourseformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
