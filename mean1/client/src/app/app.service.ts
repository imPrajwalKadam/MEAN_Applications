import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = `${environment.apiUrl}` 

  constructor(public http:HttpClient) 
  {
  }
  getDetails()
  {
  return this.http.get<any>(`${this.apiUrl}`).pipe(map((res:any)=>{
    return res;
  }))
  }   

  postDetails(data:any)
  {
    return this.http.post<any>(`http://localhost:3000/aths`,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getFormDetails()
  {
    return this.http.get<any>('http://localhost:3000/aths').pipe(map((res:any)=>{
      return res;
    }))
  }
}
