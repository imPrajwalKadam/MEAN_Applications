import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EappServiceService {
  constructor(private http : HttpClient) 
  { }
  getBatches()
  {
    return this.http.get('/app/technologys');
  }
}
