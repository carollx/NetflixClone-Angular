import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  readonly apiURL = "https://api.themoviedb.org/3";
  readonly apiKey = "c0150151da4ba3bb99008e2a5503d8e3";

  constructor(private http: HttpClient) {}

  listarConteudoOriginal() {
    this.http.get(`${ this.apiURL }/discover/tv?with_networks=213&language=pt-BR&api_key=${this.apiKey}`)
             .subscribe(resultado => console.log(resultado));
  }
}
