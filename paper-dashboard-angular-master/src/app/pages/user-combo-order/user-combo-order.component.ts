import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { isTemplateExpression } from 'typescript';

interface RestaurantInfo {
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}

interface PersonalInfo {
    fullName: string;
    credits: number;
}

@Component({
    selector: 'user-combo-order-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo-order.component.html'
})

export class UserComboOrderComponent implements OnInit { 
    ngOnInit() {
}
}