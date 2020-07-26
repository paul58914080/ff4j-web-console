import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator.component';
import { PaginatorService } from './paginator.service';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatPaginatorModule],
      declarations: [PaginatorComponent],
      providers: [PaginatorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onPageChange method when the page is changed', () => {
    spyOn(component, 'onPageChange').and.callThrough();
    fixture.nativeElement.querySelector('mat-paginator').dispatchEvent(new Event('page'));
    fixture.detectChanges();
    expect(component.onPageChange).toHaveBeenCalled();
  });
});
