import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    showValues: boolean = false;

    constructor(private router: Router){

    }

    onShowValues(event: Event) {
        this.showValues = (<HTMLInputElement>event.target).checked;
    }

    onClear() {
    }

    onCancel() {
        this.router.navigate(["/home"]);
    }
}
