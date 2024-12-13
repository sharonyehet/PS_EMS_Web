import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EnumToArrayPipe } from '../shared/pipes/enumToArray.pipe';
import { routes } from './app.routes';
import { HttpResponseInterceptor } from './core/http-interceptors/http-response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMomentDateAdapter(),
    EnumToArrayPipe,
    HttpResponseInterceptor,
  ],
};
