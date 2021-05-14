import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeliveryGuySidebarComponent } from './delivery-guy-sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ DeliveryGuySidebarComponent ],
    exports: [ DeliveryGuySidebarComponent ]
})

export class DeliveryGuySidebarModule {}