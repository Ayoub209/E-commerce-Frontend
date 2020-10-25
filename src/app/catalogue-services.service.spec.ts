import { TestBed } from '@angular/core/testing';

import { CatalogueServicesService } from './catalogue-services.service';

describe('CatalogueServicesService', () => {
  let service: CatalogueServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
