import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginatorComponent} from './paginator.component';
import {MatPaginatorModule} from '@angular/material';

describe('PaginatorComponent', () => {
    let component: PaginatorComponent;
    let fixture: ComponentFixture<PaginatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatPaginatorModule],
            declarations: [PaginatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
