import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ng-login',
  templateUrl: './ng-login.component.html',
  styleUrl: './ng-login.component.css'
})
export class NgLoginComponent {
    showValues: boolean = true;
    showExtraEmail: boolean = false;
    email: string = "";
    password: string = "";
    extraEmail: string = "";

    constructor(private toastrService: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSignIn(form: NgForm): void {
        console.log("form... ", form);
        if (this.email === "admin@harriscomputer.com" && this.password === "Control123#") {
            this.toastrService.success(`User: ${this.email} welcome!`);
            this.router.navigate(["/home"]);
        } else {
            this.toastrService.error("Invalid user or password");
            this.loadDefaultData("", "", "");
        }
    }

    public loadDefaultData(email: string = "admin@harriscomputer.com", password: string = "Control123#", extraEmail: string = "administrator@harriscomputer.com"): void {
        this.email = email;
        this.password = password;
        this.extraEmail = extraEmail;
    }
}
