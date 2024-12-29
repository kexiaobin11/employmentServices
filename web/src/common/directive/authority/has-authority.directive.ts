import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {filter, pipe, Subject, takeUntil} from "rxjs";

/**
 * 权限指令
 */
@Directive({
  selector: '[appHasAuthority]',
  standalone: true
})
export class HasAuthorityDirective implements OnInit, OnDestroy {
  private ngUserSubject$ = new Subject<void>();

  constructor(private readonly templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private userService: UserService) {
  }

  @Input('appHasAuthority') authority: string;

  ngOnInit(): void {
    const hasView = this.viewContainer.length;
    this.userService.select$(UserService.currentUser).pipe(filter(v => !!v), takeUntil(this.ngUserSubject$)).subscribe(v => {
      if (hasView === 0 && v?.role === this?.authority) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (hasView > 0 && v.role !== this.authority) {
        this.viewContainer.clear();
      }
    })
  }

  ngOnDestroy() {
    this.ngUserSubject$.next();
    this.ngUserSubject$.complete();
  }
}
