import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties.component';
import { PropertiesModule } from './properties.module';

@NgModule({
  imports: [BrowserModule, PropertiesModule, RouterModule.forRoot([])],
  bootstrap: environment.production ? [] : [PropertiesComponent],
})
export class PropertiesBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ff4jPropertiesElement = createCustomElement(PropertiesComponent, { injector: this.injector });
    customElements.define('ff4j-properties-element', ff4jPropertiesElement);
  }
}
