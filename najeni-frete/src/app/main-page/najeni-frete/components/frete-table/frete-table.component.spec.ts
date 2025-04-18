import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteTableComponent } from './frete-table.component';

describe('FreteTableComponent', () => {
  let component: FreteTableComponent;
  let fixture: ComponentFixture<FreteTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreteTableComponent]
    });
    fixture = TestBed.createComponent(FreteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
