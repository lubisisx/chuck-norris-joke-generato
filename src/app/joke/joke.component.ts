import { Component, OnInit } from '@angular/core';
import { IJoke } from '../models/joke.model';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  joke: IJoke | undefined;

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.fetchJoke();
  }

  fetchJoke(): void {
    this.jokeService.getRandomJoke().subscribe(
      data => {
        this.joke = data;
        console.log(this.joke);
      },
      error => {
        console.error('Error fetching joke');
      }
    );
  }

  markAsFavorite(joke: IJoke): void {
    this.jokeService.markAsFavorite(joke).subscribe(
      () => console.log("Success"),
      error => console.error('Error marking as favorite', error)
    );
  }
}
