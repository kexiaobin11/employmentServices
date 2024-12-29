import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';
import {UserService} from '../../../service/user.service';
import {User} from '../../../entity/user';
import {BaseComponent} from '../../../common/base-component/base-component';
import {takeUntil} from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent extends BaseComponent implements OnInit {
  user: User;
  menus = [
    {
      name: '首页',
      url: '',
      icon: 'fas fa-tachometer-alt',
    },
    {
      name: '就业指导',
      url: 'article',
      icon: 'fas fa-building',
    },
    {
      name: '职位信息',
      url: 'job',
      icon: 'fas fa-address-card',
    },
    {
      name: '企业信息',
      url: 'company',
      icon: 'fas fa-building',
    }
  ];

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.userService.select$(UserService.currentUser).pipe(takeUntil(this.ngOnDestroy$)).subscribe(v => {
      this.user = v;
    })
  }

  logout() {
    this.userService.logout();
  }
}
