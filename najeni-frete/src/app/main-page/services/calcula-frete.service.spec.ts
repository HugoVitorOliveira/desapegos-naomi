import { TestBed } from '@angular/core/testing';

import { CalculaFreteService } from './calcula-frete.service';

describe('CalculaFreteService', () => {
  let service: CalculaFreteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaFreteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
