import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeatureService} from '../../shared/services/feature.service';
import {AgGridModule} from 'ag-grid-angular';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {MatMenuModule, MatIconModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FeatureCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    FeaturesComponent
  ],
  providers: [FeatureService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule {
}
