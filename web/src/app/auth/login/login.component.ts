import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  /** 登录表单对象 */
  loginForm: FormGroup;

  /** 错误信息 */
  errorInfo: string | undefined;

  constructor(private router: Router, private userService: UserService) {
    /** 创建登录表单 */
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.errorInfo = '';
    this.loginForm.valueChanges
      .subscribe(() => {
        this.errorInfo = '';
      });
  }

  login(): void {
    const user = {
      username: this.loginForm.get('username')?.value as string,
      password: this.loginForm.get('password')?.value as string,
    };

    this.userService.login(user).subscribe({next: () => {
        this.router.navigateByUrl('').then();
      }, error: (err) => {
        this.errorInfo = '登录失败，请检查您填写的信息是否正确';
      }
    });
  }
}

