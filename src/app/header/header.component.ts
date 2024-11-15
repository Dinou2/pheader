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

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/CV_Amos_Gbedigassi.pdf'; // Chemin vers le fichier CV
    link.download = 'CV_Amos_Gbedigassi.pdf';    // Nom du fichier téléchargé
    link.click();
  }
}
