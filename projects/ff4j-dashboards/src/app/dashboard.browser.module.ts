import { Injector, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, DashboardModule, RouterModule.forRoot([])],
  bootstrap: environment.loadBootstrap ? [DashboardComponent] : [],
})
export class DashboardBrowserModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): any {
    const dashboardElement = createCustomElement(DashboardComponent, {
      injector: this.injector,
    });
    customElements.define('ff4j-dashboard-element', dashboardElement);
  }
}
