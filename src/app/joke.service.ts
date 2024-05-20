import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJoke } from './models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl = 'https://localhost:5000/api/jokes';

  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<any> {
    return this.http.get<IJoke>(`${this.apiUrl}/random`);
  }

  markAsFavorite(joke: IJoke): Observable<any> {
    return this.http.post<IJoke>(`${this.apiUrl}/favorites/${joke.id}`, joke);
  }

  getFavoriteJokes(): Observable<any> {
    return this.http.get<IJoke[]>(`${this.apiUrl}/favorites`);
  }
}
