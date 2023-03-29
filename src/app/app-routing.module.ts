import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './core/components/users-search/users-search.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
