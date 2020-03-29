import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DashboardModule } from './app/dashboard.module';
import { environment } from './environments/environment';
import { DashboardBrowserModule } from './app/dashboard.browser.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DashboardBrowserModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom,
  })
  .catch((err) => console.error(err));
