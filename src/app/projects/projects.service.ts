import { Injectable } from '@angular/core';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getAllProjects(): Project[] {
    return [
      {
        title: 'Mój piewszy projekt',
        description: 'Opis mojego projektu',
        imgUrl: 'https://picsum.photos/200/200?image=68',
        likedBy: 10283
      },
      {
        title: 'Mój 2 projekt',
        description: 'Opis mojego projektu 2',
        imgUrl: 'https://picsum.photos/200/200?image=123',
        likedBy: 10283
      },
      {
        title: 'Mój 3 projekt',
        description: 'Opis mojego projektu 3',
        imgUrl: 'https://picsum.photos/200/200?image=231',
        likedBy: 10283
      },
      {
        title: 'Mój 4 projekt',
        description: 'Opis mojego projektu 4',
        imgUrl: 'https://picsum.photos/200/200?image=1',
        likedBy: 10283
      }
    ];
  }
}
