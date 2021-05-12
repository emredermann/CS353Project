import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DeliverComponent }            from '../../pages/deliver/deliver.component';
import { TableComponent }           from '../../pages/table/table.component';
import { BusinessComponent }   from '../../pages/business/business.component';
import { LoginComponent }         from '../../pages/login/login.component';
import { UserComponent } from '../../pages/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    DeliverComponent,
    TableComponent,
    LoginComponent,
    BusinessComponent,
    UserComponent
  ]
})

export class AdminLayoutModule {}
