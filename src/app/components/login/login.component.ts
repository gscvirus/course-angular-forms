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
    email: string = "";
    password: string = "";
    extraEmail: string = "";

    constructor(private toastrService: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
    }

    public setEmail(event: Event): void {
        this.email = (<HTMLInputElement>event.target).value;
        this.extraEmail = this.email;
    }

    public setPassword(event: Event): void {
        this.password = (<HTMLInputElement>event.target).value;
    }

    public setExtraEmail(event: Event): void {
        this.extraEmail = (<HTMLInputElement>event.target).value;
    }

    onShowExtraEmail(event: Event): void {
        this.showExtraEmail = (<HTMLInputElement>event.target).checked;
    }

    onShowValues(event: Event): void {
        this.showValues = (<HTMLInputElement>event.target).checked;
    }

    onSignIn(): void {
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
