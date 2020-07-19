import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureService } from '../../../../src/app/shared/services/feature.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule, LoggerModule.forRoot({ level: NgxLoggerLevel.INFO }), HttpClientModule],
  exports: [FeaturesComponent],
  providers: [FeatureService],
})
export class FeaturesModule {}
