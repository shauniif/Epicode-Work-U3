import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [ {
  path:'',
  redirectTo: '/home',
  pathMatch: 'full',
  },
  {
  path:'home',
  component: HomeComponent,
  title:'Home'
  },
  {
    path:'active-posts',
    component: ActivePostsComponent,
    title:'Active posts'
  },
  {
    path:'inactive-posts',
    component: InactivePostsComponent,
    title:'Inactive posts'
  },
  {
    path:'home/:id',
    component: PostDetailComponent,
    title:'Post detail'
  },
  {
    path:'active-posts/:id',
    component: PostDetailComponent,
    title:'Post detail'
  },
  {
    path:'inactive-posts/:id',
    component: PostDetailComponent,
    title:'Post detail'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
