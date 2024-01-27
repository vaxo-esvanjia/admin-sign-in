import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/sign in/signin/signin.component';
import { HomecardComponent } from './components/home/homecard/homecard.component';
import { DetailsComponent } from './components/details page/details/details.component';

const routes: Routes = [
  {path: '', component: SigninComponent },
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
