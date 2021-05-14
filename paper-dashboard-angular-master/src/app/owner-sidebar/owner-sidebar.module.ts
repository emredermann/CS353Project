import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwnerSidebarComponent } from './owner-sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ OwnerSidebarComponent ],
    exports: [ OwnerSidebarComponent ]
})

export class OwnerSidebarModule {}