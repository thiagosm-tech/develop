import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSearchComponent } from './components/users-search/users-search.component';


const routes: Routes = [
  { path: '', component: UserSearchComponent },
  { path: 'user-details', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoute { }