import {Component, OnInit} from '@angular/core';
import {Job} from '../../../entity/job';
import {JobService} from '../../../service/job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  job: Job;

  constructor(private jobService: JobService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.jobService.getById(id).subscribe(value => {
          this.job = value;
        });
      });
  }

  onBack() {
    window.history.back();
  }
}
