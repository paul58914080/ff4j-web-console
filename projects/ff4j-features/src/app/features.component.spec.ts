import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';
import { FeatureService } from '../../../../src/app/shared/services/feature.service';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Feature } from '../../../../src/app/shared/models/Feature';
import { FeaturesModule } from './features.module';
import { LoggerTestingModule, NGXLoggerMock } from 'ngx-logger/testing';
import { NGXLogger } from 'ngx-logger';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;
  let featureService: FeatureService;
  let logger: NGXLoggerMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FeaturesModule, LoggerTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    featureService = fixture.debugElement.injector.get(FeatureService);
    logger = fixture.debugElement.injector.get(NGXLogger);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have requested to get features from RESTful api', () => {
    // Given
    const features: Feature[] = require('../../../../mock/data.json').ff4j.store.features;
    spyOn(featureService, 'getFeatures').and.returnValues(of(features));
    // When
    fixture.detectChanges();
    // Then
    expect(featureService.getFeatures).toHaveBeenCalledTimes(1);
    expect(component.features).toBeDefined();
    expect(JSON.stringify(component.features)).toEqual(JSON.stringify(features));
  });

  it('should log errors when get features from RESTful api request fails', () => {
    const error = new Error('Unable to handle');
    spyOn(featureService, 'getFeatures').and.returnValue(throwError(error));
    spyOn(logger, 'error').and.callThrough();
    fixture.detectChanges();
    expect(featureService.getFeatures).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith('Unable to fetch features', error);
  });
});
