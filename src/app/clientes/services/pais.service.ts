import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises() {
    
    const url = 'https://restcountries.eu/rest/v2/allddd';
    return this.http.get(url);

  }


}
