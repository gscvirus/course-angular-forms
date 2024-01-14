import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    navToggle(button: HTMLButtonElement, menu: HTMLDivElement) {
        button.classList.toggle("open");
        menu.classList.toggle("flex");
        menu.classList.toggle("hidden");
    }
}
