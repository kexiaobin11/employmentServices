import {Component, OnInit} from '@angular/core';
import {Job} from '../../../entity/job';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Company} from '../../../entity/company';
import {JobService} from '../../../service/job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {filter, map} from 'rxjs';
import {CompanySelectComponent} from '../../company/company-select/company-select.component';
import {EditorComponent} from '../../editor/editor.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CompanySelectComponent,
    EditorComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
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
    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.jobService.getById(id).subscribe(value => {
          this.job = value;
          this.formGroup.setValue({
            name: this.job.name,
            workPlace: this.job.workPlace,
            requirement: this.job.requirement,
            minMonthSalary: this.job.minMonthSalary,
            maxMonthSalary: this.job.maxMonthSalary,
            salaryDetail: this.job.salaryDetail,
            company: this.job.company,
            description: this.job.description,
          });
        });
      });
  }

  onSubmit() {
    const job: Job = this.formGroup.value;
    this.jobService.update(this.job.id, job).subscribe({
      next: () => {
        this.commonService.success(() => {
          this.onClose();
        });
      }
    });
  }

  onClose() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}

