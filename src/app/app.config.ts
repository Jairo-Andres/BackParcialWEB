import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const apiUrl = 'http://localhost:8080';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

export function formatApiUrl(route: string): string {
  return `${apiUrl}/${route}`;
}
