import {Component, OnInit} from '@angular/core';
import {Company} from '../../../entity/company';
import {Page, YzPageModule} from '@yunzhi/ng-common';
import {CompanyService} from '../../../service/company.service';
import {Job} from '../../../entity/job';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {JobService} from '../../../service/job.service';
import {companies} from '../../../api/company-api';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    YzPageModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  pageData: Page<Company>;
  companies: Company[] = [] as Company[];

  name = new FormControl<string>('');
  param = {
    page: 0,
    size: environment.size,
    name: '',
  };

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(v => {
      this.param.name = v;
    });
    this.reload();

    this.companyService.all().subscribe(companies => {
      this.companies = companies;
    });
  }

  onChangePage(page: number) {
    this.param.page = page;
    this.reload();
  }

  reload() {
    this.companyService.page(this.param).subscribe(v => {
      this.pageData = v;
    })
  }
}