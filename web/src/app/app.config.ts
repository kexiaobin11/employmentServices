import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {MockApiInterceptor} from '@yunzhi/ng-mock-api';
import {MockApis} from '../api/mock-apis';
import { zh_CN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ApiPrefixAndMergeMapInterceptor, XAuthTokenInterceptor} from '@yunzhi/ng-common';
import {environment} from '../environments/environment';

registerLocaleData(zh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: MockApiInterceptor.forRoot(MockApis)
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixAndMergeMapInterceptor.forRoot({api: environment.apiUrl}),
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XAuthTokenInterceptor,
      multi: true
    },
    provideNzI18n(zh_CN), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(),
  ]
};
