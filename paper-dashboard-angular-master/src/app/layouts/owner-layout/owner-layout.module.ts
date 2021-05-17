import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerLayoutRoutes } from './owner-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnerCommentsComponent } from '../../pages/owner-comments/owner-comments.component';
import { OwnerMainComponent } from '../../pages/owner-main/owner-main.component';
import { OwnerMenuEditorComponent } from '../../pages/owner-menu-editor/owner-menu-editor.component';
import { OwnerMenuItemEditorComponent } from '../../pages/owner-menu-item-editor/owner-menu-item-editor.component';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OwnerLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    OwnerCommentsComponent,
    OwnerMainComponent,
    OwnerMenuEditorComponent,
    OwnerMenuItemEditorComponent,
  ]
})

export class OwnerLayoutModule {}