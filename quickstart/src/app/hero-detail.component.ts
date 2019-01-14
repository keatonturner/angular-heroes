import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from "./hero";

@Component({
  selector: "hero-detail",
  templateUrl: "./hero-detail.component.html",
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name }} details!</h2>
      <div><label>id: </label>{{ hero.id }}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  goBack(): void {
    this.location.back();
  }
}