import {Component, OnInit} from '@angular/core';
import {Company} from '../../../entity/company';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../../service/company.service';
import {CommonService} from '../../../service/common.service';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.companyService.getById(id).subscribe(value => {
          this.company = value;
        });
      });
  }

  onBack() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
