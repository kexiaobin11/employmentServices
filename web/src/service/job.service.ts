import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../entity/article';
import {Job} from '../entity/job';
import {Observable} from 'rxjs';
import {Page} from '@yunzhi/ng-common';

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
}
