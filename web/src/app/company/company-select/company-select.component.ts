import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Company} from '../../../entity/company';
import {CompanyService} from '../../../service/company.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-company-select',
  standalone: true,
  imports: [
    NzSelectComponent,
    NzOptionComponent,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './company-select.component.html',
  styleUrl: './company-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => CompanySelectComponent)
    }
  ]
})
export class CompanySelectComponent implements OnInit, ControlValueAccessor {
  companies: Array<Company>;
  companySelect = new FormControl<Company>(null);

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.all().subscribe({
      next: (data: Company[]) => {
        this.companies = data;
      }
    });
  }

  registerOnChange(fn: (company: Company) => void): void {
    this.companySelect.valueChanges.subscribe({
        next: (data: Company) => {
          fn(data);
        }
      }
    );
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(company: Company): void {
    if (!company) {
      return;
    }
    this.companySelect.setValue(company);
  }


  /**
   * 比较函数，标识用哪个字段来比较两个对象是否为同一个对象
   * @param t1 源
   * @param t2 目标
   */
  compareFn(t1: {id: number}, t2: {id: number}) {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
