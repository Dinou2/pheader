import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  afficheMobileMenu:boolean = false;
  iconFul:string='bi bi-list';

  openMenu(){
  this.afficheMobileMenu= !this.afficheMobileMenu
  this.iconFul=this.afficheMobileMenu ? 'bi bi-x':'bi bi-list'
  }

  closeMenu(){
    this.afficheMobileMenu=false;
    this.iconFul='bi bi-list'
  }
}
