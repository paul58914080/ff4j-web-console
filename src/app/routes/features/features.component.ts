import {Component, OnInit} from '@angular/core';
import {FeatureService} from '../../shared/services/feature.service';
import {Feature} from '../../shared/models/Feature';
import {NGXLogger} from 'ngx-logger';
import {Property} from '../../shared/models/Property';
import MapUtils from '../../shared/utils/map.utils';

@Component({
  selector: 'ff4j-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[];

  constructor(private featureService: FeatureService, private logger: NGXLogger) {
  }

  ngOnInit() {

      const properties = new Map<string, Property>();
      properties.set('Sample Property', {
          'name': 'SampleProperty',
          'description': '',
          'type': 'org.ff4j.property.PropertyString',
          'value': 'go!',
          'fixedValues': []
      });

      const initParams = new Map<string, string>();
      initParams.set('expression', 'f1 & f2 | !f1 | f2');

      this.features = [{
          uid: 'Feature_UID',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`,
          group: 'Group Name',
          enable: false,
          permissions: [ 'ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER' ],
          customProperties: properties,
          flippingStrategy: {
              type: 'org.ff4j.strategy.el.ExpressionFlipStrategy',
              initParams: initParams
          }
      },
          {
              uid: 'Feature_UID',
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`,
              group: 'Group Name',
              enable: false,
              permissions: [ 'ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER' ],
              customProperties: properties,
              flippingStrategy: {
                  type: 'org.ff4j.strategy.el.ExpressionFlipStrategy',
                  initParams: initParams
              }
          }];
    this.featureService.getFeatures().subscribe((response) => {
      this.features = response;
      this.initProperties();
      this.logger.debug('Features : ' + JSON.stringify(this.features));
    }, (error) => {
      this.logger.error('Unable to fetch features', error);
    });
  }

  private initProperties() {
    this.features.forEach((feature) => {
      if (feature.customProperties && !(feature.customProperties instanceof Map)) {
        feature.customProperties = MapUtils.objectToMap(feature.customProperties);
      }
    });
  }
}
