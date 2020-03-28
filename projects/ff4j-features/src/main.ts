import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { FeaturesBrowserModule } from './app/features-browser.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(FeaturesBrowserModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom,
  })
  .catch((err) => console.error(err));
