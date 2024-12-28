import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../service/company.service';
import {Company} from '../../entity/company';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getTo4Company().subscribe((companies) => {
        this.companies = companies;
      }
    );
  }
}
