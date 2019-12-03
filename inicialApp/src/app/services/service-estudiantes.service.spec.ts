import { TestBed } from '@angular/core/testing';

import { ServiceEstudiantesService } from './service-estudiantes.service';

describe('ServiceEstudiantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEstudiantesService = TestBed.get(ServiceEstudiantesService);
    expect(service).toBeTruthy();
  });
});
