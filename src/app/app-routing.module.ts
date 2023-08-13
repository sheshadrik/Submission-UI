import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent},
   {
    path: 'submissions',
    loadChildren: () => import('./submission/submission.module').then(m => m.SubmissionModule)
  },
   { path: 'profiles', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
