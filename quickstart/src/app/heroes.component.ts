import { Component, OnInit } from '@angular/core';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";


const HEROES: Hero[] = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];
@Component({
  selector: "my-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{ selectedHero.name | uppercase }} is my hero</h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
  `,

  styles: [
    `
      .selected {
        background-color: #cfd8dc !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #eee;
        margin: 0.5em;
        padding: 0.3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #bbd8dc !important;
        color: white;
      }
      .heroes li:hover {
        color: #607d8b;
        background-color: #ddd;
        left: 0.1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607d8b;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: 0.8em;
        border-radius: 4px 0 0 4px;
      }
    `
  ],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
  