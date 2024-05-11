import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ViewcourseComponent } from './shared/components/viewcourse/viewcourse.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    redirectTo : '',
    pathMatch : 'full'
  },
  {
    path : 'about',
    component : AboutComponent,
  },
  {
    path : 'course/:id',
    component : ViewcourseComponent,
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'page-not-found',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
