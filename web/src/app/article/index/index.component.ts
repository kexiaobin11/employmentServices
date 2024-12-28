import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {
  NzListComponent, NzListItemActionComponent,
  NzListItemComponent, NzListItemExtraComponent,
  NzListItemMetaAvatarComponent, NzListItemMetaDescriptionComponent,
  NzListItemMetaTitleComponent, NzListModule
} from 'ng-zorro-antd/list';
import {NzIconDirective, NzIconModule} from 'ng-zorro-antd/icon';
import {Article} from '../../../entity/article';
import {DatePipe} from '@angular/common';
import {Page, YzPageModule} from '@yunzhi/ng-common';
import {environment} from '../../../environments/environment';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NzListModule,
    NzIconModule,
    DatePipe,
    YzPageModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  articles: Article[];
  pageData: Page<Article>;
  title = new FormControl<string>('');

  param = {
    page: 0,
    size: environment.size,
    title: '',
  };

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(v => {
      this.param.title = v;
    });

    this.reload();
    this.articleService.all().subscribe(v => {
      this.articles = v;
    })
  }

  onChangePage(page: number) {
    this.param.page = page;
  }

  reload() {
    this.articleService.page(this.param).subscribe(v => {
      this.pageData = v;
    })
  }
}