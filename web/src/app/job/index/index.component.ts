import {Component, OnInit} from '@angular/core';
import {JobService} from '../../../service/job.service';
import {Job} from '../../../entity/job';
import {Page, YzPageModule} from '@yunzhi/ng-common';
import {environment} from '../../../environments/environment';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    YzPageModule,
    ReactiveFormsModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  pageData: Page<Job>;
  jobs: Job[] = [];

  name = new FormControl<string>('');
  param = {
    page: 0,
    size: environment.size,
    name: '',
  };

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(v => {
      this.param.name = v;
    });
    this.reload();

    this.jobService.all().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  onChangePage(page: number) {
    this.param.page = page;
    this.reload();
  }

  reload() {
    this.jobService.page(this.param).subscribe(v => {
      this.pageData = v;
    })
  }
}
