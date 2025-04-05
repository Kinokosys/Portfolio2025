import { Component } from '@angular/core';

@Component({
  selector: 'app-veille',
  standalone: false,
  templateUrl: './veille.component.html',
  styleUrl: './veille.component.css'
})
export class VeilleComponent {
  // Un tableau d'objets pour suivre l'état de chaque article
  articles = [
    { id: 1, visible: false },
    { id: 2, visible: false },
    { id: 3, visible: false },
    { id: 4, visible: false }
  ];

  // Méthode pour basculer la visibilité d'un article
  toggleContent(index: number) {
    this.articles[index].visible = !this.articles[index].visible;
  }
}

