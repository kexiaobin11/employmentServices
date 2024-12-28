import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ARTICLE_ROUTERS} from './article/article-routers';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'article',
        loadChildren: () => import('./article/article-routers').then(m => m.ARTICLE_ROUTERS)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.routes').then(m => m.JOB_ROUTES)
      },
      {
        path: 'company',
        loadChildren: () => import('./company/company.routes').then(m => m.COMPANY_ROUTES)
      }
    ]
  }
];
