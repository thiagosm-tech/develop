import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { UserSearchComponent } from './components/users-search/users-search.component';
import { ScannedActionsSubject, StoreModule } from '@ngrx/store';
import { CoreRoute } from './core.route';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UserSearchComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoute,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    ScannedActionsSubject
  ]
})
export class CoreModule { }
