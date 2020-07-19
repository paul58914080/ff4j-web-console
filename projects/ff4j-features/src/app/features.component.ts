import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../../../src/app/shared/services/feature.service';
import { Feature } from '../../../../src/app/shared/models/Feature';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'ff4j-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  features: Feature[];

  constructor(private featureService: FeatureService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(
      (response) => {
        this.features = response;
      },
      (error) => {
        this.logger.error('Unable to fetch features', error);
      }
    );
  }
}
