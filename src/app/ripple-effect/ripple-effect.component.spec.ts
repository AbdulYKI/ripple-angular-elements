import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleEffectComponent } from './ripple-effect.component';

describe('RippleEffectComponent', () => {
  let component: RippleEffectComponent;
  let fixture: ComponentFixture<RippleEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RippleEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
