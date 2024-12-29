import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../entity/job';
import {Company} from '../entity/company';
import {Page} from '@yunzhi/ng-common';
import {companies} from '../api/company-api';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  getTo4Company(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('/company/getTo4Company');
  }

  all(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('/company/getAll');
  }

  page(param: { size: number; page: number, name?: string; }): Observable<Page<Company>> {
    return this.httpClient.get<Page<Company>>('/company/page',{params: param})
  }

  save(company: { name: string; description: string; address: string; contactPhone: string; email: string; category: string, scale: string, introduction: string}) {
    company = company as Company;
    return this.httpClient.post<Company>('/company', company);
  }

  getById(id: number) {
    return this.httpClient.get<Company>(`/company/${id}`);
  }

  update(id: number, company: {name: string; description: string; address: string; contactPhone: string; email: string; category: string, scale: string, introduction: string}) {
    company = company as Company;
    return this.httpClient.put<Company>(`/company/${id}`,company);
  }
}
