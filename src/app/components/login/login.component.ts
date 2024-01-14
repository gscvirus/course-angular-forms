import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    showValues: boolean = false;
    showExtraEmail: boolean = false;

    constructor(private toastrService: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
    }

    setShowExtraEmail(event: Event) {
        this.showExtraEmail = (<HTMLInputElement>event.target).checked;
    }

    setShowValues(event: Event) {
        this.showValues = (<HTMLInputElement>event.target).checked;
    }

    onSignIn() {
    }
}
