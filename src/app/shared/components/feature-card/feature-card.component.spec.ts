import {FeatureCardComponent} from './feature-card.component';
import {Component} from '@angular/core';
import {Feature} from '../../models/Feature';
import {initContext, TestContext} from '../../../../testing/test.context';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule} from '@angular/material';

const mockFeature1: Feature = {
    uid: 'Feature_UID1',
    description: `Feature Card1 Description`,
    group: 'Group Name1',
    enable: false,
    permissions: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER']
};

const mockFeature2: Feature = {
    uid: 'Feature_UID2',
    description: `Feature Card2 Description`,
    group: 'Group Name2',
    enable: false,
    permissions: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_USER']
};
@Component({
    template: `<ff4j-feature-card [feature]='feature'></ff4j-feature-card>`
})
class TesteeFeatureCardComponent {
    feature: Feature = mockFeature1;
}

describe('FeatureCardComponent', () => {
    type Context = TestContext<FeatureCardComponent, TesteeFeatureCardComponent>;
    const moduleMetaData: any = {
        MatCardModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule
    };
    initContext(FeatureCardComponent, TesteeFeatureCardComponent, moduleMetaData);

    it('should create', function (this: Context) {
        this.fixture.detectChanges();
        expect(this.hostComponent).toBeTruthy();
        expect(this.testedComponent).toBeTruthy();
    });

    it('should have got the input value for feature', function(this: Context) {
        this.fixture.detectChanges();
        expect(this.testedComponent.feature).toBe(mockFeature1);
        // on change should apply
        this.hostComponent.feature = mockFeature2;
        this.detectChanges();
        expect(this.testedComponent.feature).toBe(mockFeature2);
    });
});
