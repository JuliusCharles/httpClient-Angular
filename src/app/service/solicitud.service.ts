import { Injectable } from '@angular/core';

//Import
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  URL_PAISES = 'https://restcountries.eu/rest/v2/lang/es';
  URL: string = 'https://jsonplaceholder.typicode.com/posts';



  constructor(private httpClient: HttpClient) { }

  solicitudGet(){
     return this.httpClient.get(this.URL_PAISES);
  }

  enviarPost(enviarJson){
    return this.httpClient.post(`${this.URL}`, enviarJson)
  }
}
