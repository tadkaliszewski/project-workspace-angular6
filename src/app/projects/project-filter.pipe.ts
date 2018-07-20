import { Pipe, PipeTransform } from '@angular/core';
import {Project} from './Project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projectArray: Project[], searchTerm: string): Project[] {

    const searchTermLower = searchTerm.toLowerCase();

    return projectArray
      .filter( (project: Project) => project.title.toLowerCase().startsWith(searchTermLower));
  }

}
