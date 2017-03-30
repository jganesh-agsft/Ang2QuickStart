import { Component } from '@angular/core';

import { Customer } from "./Customer"

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './st.html'
})
export class AppComponent {
    customerobj: Customer = new Customer();
}