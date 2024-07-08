import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Post} from "./Post";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http: HttpClient = inject(HttpClient);
  constructor(private httpClient:HttpClient) {
    console.log('Service is now ready');
  }
  getData(){
    //const headers = new HttpHeaders({'my-header': 'hello'});
    return this.http.get<{name: string}>('https://jsonplaceholder.typicode.com/posts');
  }
}
