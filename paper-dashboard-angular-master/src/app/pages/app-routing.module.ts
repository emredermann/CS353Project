import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComboComponent } from './user-combo/user-combo.component';
import { UserComboOrderComponent } from './user-combo-order/user-combo-order.component';

const routes: Routes = [
  {path: 'page1', component: UserComboComponent},
  {path: 'page2', component: UserComboOrderComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
