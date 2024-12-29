import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EditorComponent} from '../../editor/editor.component';
import {Company} from '../../../entity/company';
import {CompanyService} from '../../../service/company.service';
import {CommonService} from '../../../service/common.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EditorComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  company: Company;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]), // 公司名称
    description: new FormControl('', Validators.maxLength(300)), // 公司简介
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]), // 公司地址
    contactPhone: new FormControl('', [Validators.required, Validators.pattern(/^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}?\)?[\s-]?)?\d{7,10}$/)]), // 联系电话
    email: new FormControl('', [Validators.email]), // 公司邮箱
    category: new FormControl('', Validators.required), // 行业类别
    scale: new FormControl('', Validators.required), // 公司规模
    introduction: new FormControl('', Validators.required) // 公司介绍
  });

  constructor(private companyService: CompanyService,
              private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(filter(p => typeof p['id'] !== 'undefined'), map(p => +p['id']))
      .subscribe(id => {
        this.companyService.getById(id).subscribe(value => {
          this.company = value;
          this.formGroup.setValue({
            name: this.company.name,
            description: this.company.description,
            contactPhone: this.company.contactPhone,
            address: this.company.address,
            email: this.company.email,
            category: this.company.category,
            scale: this.company.scale,
            introduction: this.company.introduction,
          });
        });
      });
  }

  onSubmit(): void {
    const company: Company = this.formGroup.value;
    this.companyService.update(this.company.id, company).subscribe(() => {
      this.commonService.success(() => {
        this.router.navigate(['../../'], {relativeTo: this.route}).then();
      }, '编辑成功');
    });
  }

  onClose() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
