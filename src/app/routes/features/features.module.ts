import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {FeatureRenderer} from './feature.renderer';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([FeatureRenderer]),
    FeatureCardModule
  ],
  declarations: [
    FeaturesComponent, FeatureRenderer
  ],
  providers: [FeatureService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule {
}
