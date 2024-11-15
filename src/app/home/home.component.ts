import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // tabs = [
  //   { name: 'London', color: 'red', description: 'London is the capital city of England.' },
  //   { name: 'Paris', color: 'green', description: 'Paris is the capital of France.' },
  //   { name: 'Tokyo', color: 'blue', description: 'Tokyo is the capital of Japan.' },
  //   { name: 'Oslo', color: 'orange', description: 'Oslo is the capital of Norway.' }
  // ];

  // activeTab: string = this.tabs[0].name;

  // openTab(name: string) {
  //   this.activeTab = name;
  // }

  projs = [
    {
      imgProjUrl:"assets/image/projets/p1.png",
      titlProj: "Projet web N°1"
    },
    {
      imgProjUrl:"assets/image/projets/p2.png",
      titlProj: "Projet web N°2"
    },
    {
      imgProjUrl:"assets/image/projets/p6.png",
      titlProj: "Projet web N°3"
    },
    {
      imgProjUrl:"assets/image/projets/p4.png",
      titlProj: "Projet web N°4"
    },
    {
      imgProjUrl:"assets/image/projets/p3.png",
      titlProj: "Projet web N°5"
    },
    {
      imgProjUrl:"assets/image/projets/p4.png",
      titlProj: "Projet web N°6"
    }
  ]
}
