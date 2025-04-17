import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NajeniFreteComponent } from './najeni-frete.component';

describe('NajeniFreteComponent', () => {
  let component: NajeniFreteComponent;
  let fixture: ComponentFixture<NajeniFreteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NajeniFreteComponent]
    });
    fixture = TestBed.createComponent(NajeniFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
