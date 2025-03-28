import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavonAPPComponent } from './savon-app.component';

describe('SavonAPPComponent', () => {
  let component: SavonAPPComponent;
  let fixture: ComponentFixture<SavonAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavonAPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavonAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
