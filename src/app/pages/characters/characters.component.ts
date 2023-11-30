import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { MarvelPage } from 'src/app/shared/models/MarvelPage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersPage: MarvelPage | null = null;

  constructor(
    private _charactersService: CharactersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._charactersService.getCharacters().subscribe(
      data => {
        this.charactersPage = data;
        console.log(this.charactersPage);
      },
      err => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    );
  }

}
