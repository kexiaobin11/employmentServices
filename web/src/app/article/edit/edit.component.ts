import {Component, OnInit} from '@angular/core';
import {EditorComponent} from "../../editor/editor.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ArticleService} from '../../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {Article} from '../../../entity/article';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    EditorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  article: Article;
  formGroup: FormGroup = new FormGroup({
    title: new FormControl<string>(''),
    content: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.articleService.getById(id).subscribe(value => {
          this.article = value;
          this.formGroup.setValue({
            title: this.article.title,
            content: this.article.content,
            description: this.article.description,
          });
        });
      });
  }

  onSubmit() {
    const article: Article = this.formGroup.value;
    this.articleService.update(this.article.id, article).subscribe({
      next: () => {
        this.commonService.success(() => {
          this.onClose();
        });
      }
    });
  }

  onClose() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
