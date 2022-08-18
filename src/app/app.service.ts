import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
// ...

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {
    this.apiURL = this.apiURL('http://localhost:3000');
  }
  getPosts() {
    return this.http.get(this.apiURL);
  }
  apiURL(apiURL: URL) {
    throw new Error('Method not implemented.');
  }
}
// ...
