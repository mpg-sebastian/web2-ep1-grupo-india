import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'blog-post', component: BlogPostComponent},
  {path: 'blog-page', component: BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
