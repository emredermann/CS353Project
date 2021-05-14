import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerSidebarComponent } from './customer-sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CustomerSidebarComponent ],
    exports: [ CustomerSidebarComponent ]
})

export class CustomerSidebarModule {}