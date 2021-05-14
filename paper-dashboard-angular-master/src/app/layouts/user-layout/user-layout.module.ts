import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { TableComponent }           from '../../pages/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComboOrderComponent } from 'app/pages/user-combo-order/user-combo-order.component';
import { UserComboComponent } from 'app/pages/user-combo/user-combo.component';
import { UserMainComponent } from 'app/pages/user-main/user-main.component';
import { UserOrderHistoryComponent } from 'app/pages/user-order-history/user-order-history.component';
import { UserOrderComponent } from 'app/pages/user-order/user-order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    TableComponent,
    UserComboComponent,
    UserComboOrderComponent,
    UserMainComponent,
    UserOrderComponent,
    UserOrderHistoryComponent,,
  ]
})

export class UserLayoutModule {}