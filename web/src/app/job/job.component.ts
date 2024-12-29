import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Job} from '../../entity/job';
import {JobService} from '../../service/job.service';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {DataRowOutlet} from '@angular/cdk/table';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    RouterLink,
    DataRowOutlet
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService,
              private router: Router,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.jobService.getTo4Job().subscribe(jobs => this.jobs = jobs);
  }
}
