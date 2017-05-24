import { Routes } from '@angular/router';

/* Components */
import { ResumeBaseComponent } from './resume-base/resume-base.component';
import { ResumeComponent } from './resume/resume.component';
import { SnippetsComponent } from './snippets/snippets.component';

export class NavigationRoutes {
  static readonly routes: any = [
    {
      description: 'alexander teno',
      route: {
        path: 'home',
        component: ResumeBaseComponent,
        children: []
      }
    },
    {
      description: 'resume',
      route: {
        path: 'resume',
        component: ResumeComponent,
        children: []
      }
    },
    {
      description: 'snippets',
      route: {
        path: 'snippets',
        component: SnippetsComponent,
        children: []
      }
    }
  ];

  constructor() { }
}
