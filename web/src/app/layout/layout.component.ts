import {Component} from '@angular/core';
import {ArticleComponent} from "../article/article.component";
import {NavComponent} from './nav/nav.component';
import {FeatureComponent} from '../feature/feature.component';
import {JobComponent} from '../job/job.component';
import {CompanyComponent} from '../company/company.component';
import {FooterComponent} from './footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    ArticleComponent,
    NavComponent,
    FeatureComponent,
    JobComponent,
    CompanyComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
}
