import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureCardComponent} from './feature-card.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule} from '@angular/material';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Feature} from '../../models/Feature';

@Component({
    selector: 'ff4j-test-feature-card',
    template: `<ff4j-feature-card [feature]='feature'></ff4j-feature-card>`
})
class TestFeatureCardComponent {
  feature: Feature = {
      uid: 'Feature_UID',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`,
      group: 'Group Name',
      enable: false,
      permissions: [ 'ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER' ]
  };
}
describe('FeatureCardComponent', () => {
  let component: TestFeatureCardComponent;
  let fixture: ComponentFixture<TestFeatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule
      ],
      declarations: [FeatureCardComponent, TestFeatureCardComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
