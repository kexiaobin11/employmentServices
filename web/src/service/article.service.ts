import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../entity/article';
import {Page} from '@yunzhi/ng-common';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {
  }

  getTop10Articles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('/article/getTop10Articles')
  }

  all(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('/article/getAll');
  }

  page(param: { size: number; page: number; title: string }) {
    return this.httpClient.get<Page<Article>>('/article/page', {params: param})
  }

  save(article: { title: string, content: string, description: string }): Observable<Article> {
    article = article as Article;
    return this.httpClient.post<Article>('/article', article);
  }

  getById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`/article/${id}`);
  }

  update(id: number, article: Article) {
    return this.httpClient.put(`/article/${id}`, article);
  }
}
