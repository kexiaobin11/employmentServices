import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ArticleService} from '../../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {Article} from '../../../entity/article';
import {Job} from '../../../entity/job';
import {JobService} from '../../../service/job.service';
import {Company} from '../../../entity/company';
import {EditorComponent} from '../../editor/editor.component';
import {CompanySelectComponent} from '../../company/company-select/company-select.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    EditorComponent,
    ReactiveFormsModule,
    CompanySelectComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  job: Job;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    workPlace: new FormControl<string>(''),
    requirement: new FormControl<string>(''),
    minMonthSalary: new FormControl<string>(''),
    maxMonthSalary: new FormControl<string>(''),
    salaryDetail: new FormControl<string>(''),
    company: new FormControl<Company>(null),
    description: new FormControl<string>(''),
  });

  constructor(private jobService: JobService,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const job: Job = this.formGroup.value;
    this.jobService.save(job).subscribe({
      next: () => {
        this.commonService.success(() => {
         this.onClose();
        });
      }
    });
  }

  onClose() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
