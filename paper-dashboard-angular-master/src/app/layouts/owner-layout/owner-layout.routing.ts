import { Routes } from '@angular/router';
import { OwnerMainComponent } from '../../pages/owner-main/owner-main.component';
import { OwnerMenuEditorComponent } from '../../pages/owner-menu-editor/owner-menu-editor.component';
import { OwnerMenuItemEditorComponent } from '../../pages/owner-menu-item-editor/owner-menu-item-editor.component';


export const OwnerLayoutRoutes: Routes = [
    { path: '',  redirectTo:'owner-main',          pathMatch:'full'},
    { path: 'owner-main',  component: OwnerMainComponent },
    { path: 'owner-menu-editor',  component: OwnerMenuEditorComponent },
    { path: 'owner-menu-item-editor',  component: OwnerMenuItemEditorComponent }
 
];
