import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiData = 'https://jsonplaceholder.typicode.com/users';
  private apiPictures = 'https://rem.com/product/1/images';

  constructor(private http: HttpClient) { }
  public getData() {
    return this.http.get(this.apiData);
  }
}
