import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavonComponent } from './savon.component';

describe('SavonComponent', () => {
  let component: SavonComponent;
  let fixture: ComponentFixture<SavonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
