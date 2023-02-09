import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', description: 'Test 1' },
      { id: 13, name: 'Bombasto', description: 'Test 2' },
      { id: 14, name: 'Celeritas', description: 'Test 3' },
      { id: 15, name: 'Magneta', description: 'Test 4' },
      { id: 16, name: 'RubberMan', description: 'Test 5' },
      { id: 17, name: 'Dynama', description: 'Test 6' },
      { id: 18, name: 'Dr. IQ', description: 'Test 7' },
      { id: 19, name: 'Magma', description: 'Test 8' },
      { id: 20, name: 'Tornado', description: 'Test 9' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
