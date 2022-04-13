import { TestBed } from '@angular/core/testing';

import { AffichePokemonsService } from './affiche-pokemons.service';

describe('AffichePokemonsService', () => {
  let service: AffichePokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichePokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
