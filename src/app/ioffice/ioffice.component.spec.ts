import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IofficeComponent } from './ioffice.component';

describe('IofficeComponent', () => {
  let component: IofficeComponent;
  let fixture: ComponentFixture<IofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
