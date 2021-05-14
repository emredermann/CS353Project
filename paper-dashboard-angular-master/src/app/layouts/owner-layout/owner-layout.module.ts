import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerLayoutRoutes } from './owner-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnerCommentsComponent } from 'app/pages/owner-comments/owner-comments.component';
import { OwnerMainComponent } from 'app/pages/owner-main/owner-main.component';
import { OwnerMenuEditorComponent } from 'app/pages/owner-menu-editor/owner-menu-editor.component';
import { OwnerMenuItemEditorComponent } from 'app/pages/owner-menu-item-editor/owner-menu-item-editor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OwnerLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    OwnerCommentsComponent,
    OwnerMainComponent,
    OwnerMenuEditorComponent,
    OwnerMenuItemEditorComponent,
  ]
})

export class OwnerLayoutModule {}