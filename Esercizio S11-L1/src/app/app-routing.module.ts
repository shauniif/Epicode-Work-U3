import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'active-posts',
    loadChildren: () => import('./pages/active-posts/active-posts.module').then(m => m.ActivePostModule)
  },
  {
    path:'inactive-posts',
    loadChildren: () => import('./pages/inactive-posts/inactive-posts.module').then(m => m.InactivePostsModule)
  },
  {
    path:'post-detail/:id',
    loadChildren:() => import('./pages/post-detail/post-detail.module').then(m=>m.PostDetailModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
