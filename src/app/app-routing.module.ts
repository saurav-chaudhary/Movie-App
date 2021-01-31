import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OutputComponent } from './components/output/output.component';
import { SearchmovieComponent } from './components/searchmovie/searchmovie.component';

const routes: Routes = [
  {path:'',component:SearchmovieComponent},
  {path:'movie',component:MovieComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
