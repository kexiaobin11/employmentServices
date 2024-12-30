import {Component, OnInit} from '@angular/core';
import {JobService} from '../../../service/job.service';
import {Job} from '../../../entity/job';
import {Page, YzPageModule} from '@yunzhi/ng-common';
import {environment} from '../../../environments/environment';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {HasAuthorityDirective} from "../../../common/directive/authority/has-authority.directive";
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-index',
  standalone: true,
    imports: [
        YzPageModule,
        ReactiveFormsModule,
        RouterLink,
        HasAuthorityDirective
    ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  pageData: Page<Job>;

  name = new FormControl<string>('');
  param = {
    page: 0,
    size: environment.size,
    name: '',
  };

  constructor(private jobService: JobService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.reload();
    this.name.valueChanges.subscribe(v => {
      this.param.name = v;
      this.reload();
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

  onDelete(id: number) {
    this.jobService.delete(id).subscribe(() => {
      this.commonService.success(() => {
        this.reload();
      })
    })
  }
}
