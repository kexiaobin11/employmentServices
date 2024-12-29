import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {filter, map} from 'rxjs';
import {Article} from '../../../entity/article';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.articleService.updateHits(id).subscribe(value => {
          this.article = value;
        });
      });
  }

  onBack() {
    window.history.back();
  }
}
