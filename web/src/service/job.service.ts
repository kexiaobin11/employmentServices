import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../entity/article';
import {Job} from '../entity/job';
import {Observable} from 'rxjs';
import {Page} from '@yunzhi/ng-common';
import {Company} from '../entity/company';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  getTo4Job(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/job/getTo4Job');
  }

  all(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/job/getAll');
  }

  page(param: { size: number; name: string; page: number }) {
    return this.httpClient.get<Page<Job>>('/job/page',{params: param})
  }

  save(job: {name: string; workPlace: string; requirement: string; minMonthSalary: string; maxMonthSalary: string; salaryDetail: string; company: Company; description: string;}) {
    return this.httpClient.post<Job>('/job', job);
  }

  getById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(`/job/${id}`);
  }

  update(id: string, job: {name: string; workPlace: string; requirement: string; minMonthSalary: string; maxMonthSalary: string; salaryDetail: string; company: Company; description: string;}) {
    return this.httpClient.put<Job>(`/job/${id}`,job);
  }
}
