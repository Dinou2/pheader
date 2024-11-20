import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetComponent } from '../projet/projet.component';
@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrl: './detail-projet.component.css'
})
export class DetailProjetComponent implements OnInit {

  projet: any; // Projet à afficher
  mesProjets = [
    {id: 1, title: 'Projet Web 1', category: 'Categorie 1', description: 'Description Web 1', image: 'assets/image/projets/p1.png', page: ''},
    {id: 2, title: 'Projet Graphisme 1', category: 'Categorie 2', description: 'Description Graphisme 1', image: 'assets/image/projets/p2.png', page: ''},
    {id: 3, title: 'Projet APK 2', category: 'Categorie 3', description: 'Description APK 1', image: 'assets/image/projets/p1.png', page: ''},
    {id: 4, title: 'Projet Graphisme 2', category: 'Categorie 1', description: 'Description Graphisme 1', image: 'assets/image/projets/p3.png', page: ''},
    {id: 5, title: 'Projet APK 3', category: 'Categorie 2', description: 'Description APK 1', image: 'assets/image/projets/p4.png', page: ''},
    {id: 6, title: 'Projet Graphisme 3', category: 'Categorie 3', description: 'Description Graphisme 1', image: 'assets/image/projets/p4.png', page: ''}
  ];

  // projetId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
     // Afficher uniquement le projet avec l'ID 1 ou correspondant
     this.projet = this.mesProjets.find(p => p.id === id);
     // Si vous voulez forcer à afficher uniquement le Projet 1 :
    // this.projet = this.mesProjets.find(p => p.id === 1);
  }
}
