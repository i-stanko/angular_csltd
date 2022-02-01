import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemOwnerService implements InMemoryDbService {
  createDb() {
    let owners = [
      {
        id: 1,
        aFirstName: 'Семен',
        aMiddleName: 'Петрович',
        aLastName: 'Чубакка',
        aCars: [{
          carNumber: 'YT1300YT',
          brand: 'Corvet',
          model: 'Millenium Falcon',
          year: 2000,
        }]
      },
      {
        id: 2,
        aFirstName: 'Джа',
        aMiddleName: 'Бинкс',
        aLastName: 'Джа',
        aCars: [{
          carNumber: 'AA1234BB',
          brand: 'Hyundai',
          model: 'Getz',
          year: 2006,
        }]
      },
      {
        id: 3,
        aFirstName: 'Хатт',
        aMiddleName: 'Иванович',
        aLastName: 'Джабба',
        aCars: [{
          carNumber: 'BB4321AA',
          brand: 'Hyundai',
          model: 'Corolla',
          year: 2010,
        }]
      },
    ];

    return {owners};
  }
}
