import { Component } from '@angular/core';
import {ArticleComponent} from "../article/article.component";
import {CompanyComponent} from "../company/company.component";
import {FeatureComponent} from "../feature/feature.component";
import {JobComponent} from "../job/job.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        ArticleComponent,
        CompanyComponent,
        FeatureComponent,
        JobComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
