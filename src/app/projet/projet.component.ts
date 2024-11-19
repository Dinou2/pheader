import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit {

 mesProjets = [
  { title: 'Projet Web 1', category: 'Categorie 1', description: 'Description Web 1', image: 'assets/image/projets/p1.png',isZoomed: false },
  { title: 'Projet Graphisme 1', category: 'Categorie 2', description: 'Description Graphisme 1', image: 'assets/image/projets/p2.png',isZoomed: false },
  { title: 'Projet APK 2', category: 'Categorie 3', description: 'Description APK 1', image: 'assets/image/projets/p1.png',isZoomed: false },
  { title: 'Projet Graphisme 2', category: 'Categorie 1', description: 'Description Graphisme 1', image: 'assets/image/projets/p3.png', isZoomed: false},
  { title: 'Projet APK 3', category: 'Categorie 2', description: 'Description APK 1', image: 'assets/image/projets/p4.png',isZoomed: false },
  { title: 'Projet Graphisme 3', category: 'Categorie 3', description: 'Description Graphisme 1', image: 'assets/image/projets/p4.png',isZoomed: false },

 ];

 ngOnInit() { }

 filterProjets = this.mesProjets;
 activeTab = 'Mes Projets';

 filterProj(category: string):void{
  this.activeTab = category;
  this.filterProjets = this.mesProjets.filter(mesProjet => mesProjet.category === category)
 }
  
 projetsAll(){
  this.activeTab = '';
  this.filterProjets = this.mesProjets.filter(mesProjet => mesProjet.category)
 }

}
