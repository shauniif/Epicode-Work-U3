import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { InactivePostsRoutingModule } from './inactive-posts-routing.module';



@NgModule({
  declarations: [
    InactivePostsComponent
  ],
  imports: [
    CommonModule,
    InactivePostsRoutingModule
  ]
})
export class InactivePostsModule { }
