import { Routes } from '@angular/router';
//import { TableComponent } from '../../pages/table/table.component';
 
//import { OwnerCommentsComponent } from 'app/pages/owner-comments/owner-comments.component';
import { OwnerMainComponent } from 'app/pages/owner-main/owner-main.component';
import { OwnerMenuEditorComponent } from 'app/pages/owner-menu-editor/owner-menu-editor.component';
//import { OwnerMenuItemEditorComponent } from 'app/pages/owner-menu-item-editor/owner-menu-item-editor.component';
import { LoginComponent } from 'app/pages/login/login.component'

export const OwnerLayoutRoutes: Routes = [
    { path: 'login',  component:LoginComponent },
    //{ path: 'table',     component: TableComponent },
    { path: 'comments',  component: OwnerMainComponent },
    { path: 'menu-editor',  component: OwnerMenuEditorComponent },
    //{ path: 'owner-menu-item-editor',  component: OwnerMenuItemEditorComponent },
 
];

