import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../../entity/company';
import {CompanyService} from '../../../service/company.service';
import {CommonService} from '../../../service/common.service';
import {EditorComponent} from '../../editor/editor.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    EditorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
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
  }

  onSubmit() {
    const company = this.formGroup.value;
    this.companyService.save(company).subscribe(v => {
      this.commonService.success(() => {
        this.onClose();
      });
    });
  }

  onClose() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
