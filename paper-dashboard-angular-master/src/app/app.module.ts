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
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestaurantService } from './_services/restaurant-service/restaurant.service';
import { CustomerSidebarModule } from './customer-sidebar/customer-sidebar.module';
import { RegisterService } from './_services/register-service/register.service';
import { OrderService } from './_services/order-service/order.service';
import { CustomerService } from './_services/customer-service/customer.service';
import { DeliveryService } from './_services/delivery-service/delivery.service';

//import { AppRoutingModule } from './pages/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    DeliveryGuyLayoutComponent,
    OwnerLayoutComponent,
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
    HttpClientModule,
    FixedPluginModule,
    //RestaurantService
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, RestaurantService, 
    RegisterService, OrderService, CustomerService, DeliveryService

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
