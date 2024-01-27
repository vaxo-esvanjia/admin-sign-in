import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/sign in/signin/signin.component';
import { HomecardComponent } from './components/home/homecard/homecard.component';
import { DetailsComponent } from './components/details page/details/details.component';

const routes: Routes = [
  {path: '', redirectTo : 'signin', pathMatch: 'full'},
  {path: '', component: SigninComponent},
  {path: 'homecard', component:HomecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
