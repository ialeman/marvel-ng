import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MarvelPage } from 'src/app/shared/models/MarvelPage';
import { AuthService } from './auth.service';

const header = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient,
    private _authService: AuthService
  ) { }

  private baseUrl = environment.api;

  getCharacters(): Observable<MarvelPage> {
    return this.http.get<MarvelPage>(`${this.baseUrl}/characters`, header);
  }

  getCharacterById(characterId: number): Observable<MarvelPage> {
    return this.http.get<MarvelPage>(`${this.baseUrl}/characters/${characterId}`, header);
  }
}
