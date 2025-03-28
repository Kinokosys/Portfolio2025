import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavonAPIComponent } from './savon-api.component';

describe('SavonAPIComponent', () => {
  let component: SavonAPIComponent;
  let fixture: ComponentFixture<SavonAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavonAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavonAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
