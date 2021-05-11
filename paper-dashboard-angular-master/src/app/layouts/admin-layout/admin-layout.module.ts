import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { DeliverComponent }            from '../../pages/deliver/deliver.component';
import { TableComponent }           from '../../pages/table/table.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
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
    DashboardComponent,
    DeliverComponent,
    TableComponent,
    LoginComponent,
    MapsComponent,
    BusinessComponent,
    UserComponent
  ]
})

export class AdminLayoutModule {}
