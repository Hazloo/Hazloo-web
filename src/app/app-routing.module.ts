import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazlooVideoComponent } from './hazloo-video/hazloo-video.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hazloo-video', component: HazlooVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
