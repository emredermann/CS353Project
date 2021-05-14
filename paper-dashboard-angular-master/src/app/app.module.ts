import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { DeliveryGuyLayoutComponent } from './layouts/delivery-guy-layout/delivery-guy-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { BrowserModule } from "@angular/platform-browser";
import { OwnerSidebarModule } from "./owner-sidebar/owner-sidebar.module";
import { DeliveryGuySidebarModule } from './delivery-guy-sidebar/delivery-guy-sidebar.module';
import { CustomerSidebarModule } from './customer-sidebar/customer-sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    DeliveryGuyLayoutComponent,
    OwnerLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    DeliveryGuySidebarModule,
    CustomerSidebarModule,
    OwnerSidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
