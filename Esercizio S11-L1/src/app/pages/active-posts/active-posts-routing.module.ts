import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts.component';

const routes: Routes = [
  {
    path:'',
    component: ActivePostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivePostsRoutingModule { }
