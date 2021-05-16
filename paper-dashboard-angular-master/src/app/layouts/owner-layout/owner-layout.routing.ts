import { Routes } from '@angular/router';
import { OwnerMainComponent } from '../../pages/owner-main/owner-main.component';
import { OwnerCommentsComponent } from '../../pages/owner-comments/owner-comments.component';
import { OwnerRestaurantEditorComponent } from '../../pages/owner-restaurant-editor/owner-restaurant-editor.component';
import { OwnerMenuEditorComponent } from '../../pages/owner-menu-editor/owner-menu-editor.component';
import { OwnerMenuItemEditorComponent } from '../../pages/owner-menu-item-editor/owner-menu-item-editor.component';


export const OwnerLayoutRoutes: Routes = [
    { path: '',  redirectTo:'owner-main',          pathMatch:'full'},
    { path: 'owner-main',  component: OwnerMainComponent },
    { path: 'owner-comments',  component: OwnerCommentsComponent },
    { path: 'owner-restaurant-editor', component: OwnerRestaurantEditorComponent},
    { path: 'owner-menu-editor/:id',  component: OwnerMenuEditorComponent },
    { path: 'owner-menu-item-editor/:id',  component: OwnerMenuItemEditorComponent }
 
];
