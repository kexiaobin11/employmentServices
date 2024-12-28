import {Component, OnInit} from '@angular/core';
import {Job} from '../../entity/job';
import {JobService} from '../../service/job.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getTo4Job().subscribe(jobs => this.jobs = jobs);
  }
}
