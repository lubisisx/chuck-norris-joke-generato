import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { IJoke } from '../models/joke.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  jokes: IJoke[] = [];

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.fetchAllJokes();
  }

  fetchAllJokes(): void {
    this.jokeService.getFavoriteJokes().subscribe(
      data => this.jokes = data,
      error => console.error('Error fetching all jokes')
    );
  }
}
