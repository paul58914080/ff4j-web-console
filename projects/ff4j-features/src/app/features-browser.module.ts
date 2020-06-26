import { Injector, NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';
import { FeaturesModule } from './features.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FeaturesModule, RouterModule.forRoot([])],
  bootstrap: environment.production ? [] : [FeaturesComponent],
})
export class FeaturesBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const ff4jFeaturesElement = createCustomElement(FeaturesComponent, { injector: this.injector });
    customElements.define('ff4j-features-element', ff4jFeaturesElement);
  }
}
