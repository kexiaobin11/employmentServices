import { Injectable } from '@angular/core';
import {User} from '../entity/user';
import {Action, Store} from '@tethys/store';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {map, Observable, tap} from 'rxjs';

interface UserState extends Store<User> {
  currentUser: User;
}
@Injectable({
  providedIn: 'root'
})
export class UserService extends Store<UserState> {
  constructor(protected httpClient: HttpClient,
              private router: Router) {
    super({
    }, {instanceMaxCount: 0});
  }

  static currentUser(state: UserState): User {
    return state.currentUser;
  }

  setCurrentLoginUser(user: User): void {
    const state = this.getState();
    if (user) {
      state.currentUser = user;
    }
    this.next(state);
  }

  @Action()
  initCurrentLoginUser(): Observable<void> {
    return this.httpClient.get<User>('/user/currentLoginUser').pipe(map(data => {
      /*存在当前登录的用户，更新状态 否则跳转登录界面*/
      if (data) {
        const state = this.getState();
        state.currentUser = data as User;
        this.next(state);
      } else {
        this.router.navigateByUrl('login').then();
      }
    }));
  }


  @Action()
  login(user: { username: string; password: string }): Observable<User> {
    user = user as User;
    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers = headers.append('Authorization',
      'Basic ' + btoa(user.username + ':' + encodeURIComponent(user.password)));
    return this.httpClient.get<User>(`/user/login`, {headers})
      .pipe(tap(data => this.setCurrentLoginUser(data)));
  }

  @Action()
  logout(): Observable<void> {
    return this.httpClient.get<void>(`/user/logout`).pipe(tap(() => {
      this.setCurrentLoginUser(null);
    }));
  }
}
