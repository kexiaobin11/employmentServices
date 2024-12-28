import {Component, OnInit} from '@angular/core';
import {EditorComponent} from '../../editor/editor.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Article} from '../../../entity/article';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {ArticleService} from '../../../service/article.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    EditorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
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
  }

  onSubmit() {
    const article: Article = this.formGroup.value;
    this.articleService.save(article).subscribe({
      next: () => {
        this.commonService.success();
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    });
  }

  onClose() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
