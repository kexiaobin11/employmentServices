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
  previousUrl: string;

  constructor(private jobService: JobService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.previousUrl = params['from'] || null;
    });

    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.jobService.getById(id).subscribe(value => {
          this.job = value;
        });
      });
  }

  onBack() {
    if (this.previousUrl) {
      this.router.navigateByUrl(this.previousUrl);
    } else {
      this.router.navigate(['../../']); // 默认返回
    }
  }
}
