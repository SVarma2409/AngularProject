import { Injectable } from '@angular/core';
import { Details } from './deatils.model'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private details: Details[] = [];

  addDetails(detail: Details) {
    this.details.push(detail);
  }

  getDetails(): Details[] {
    return this.details;
  }
}
