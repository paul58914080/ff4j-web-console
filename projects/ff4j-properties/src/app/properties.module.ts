import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { PropertiesRoutingModule } from './properties-routing.module';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, PropertiesRoutingModule],
  exports: [PropertiesComponent],
})
export class PropertiesModule {}
