import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../entity/article';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getTop10Articles().subscribe(articles => {
      this.articles = articles;
    })
  }
}
